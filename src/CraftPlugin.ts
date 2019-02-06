import WebSocket from 'ws';
import process from 'process';
import EventEmitter from 'events';

const LOGITECH_OPTIONS_URL = 'ws://localhost:10134';

const stringify = (obj: any) => JSON.stringify(obj);

const sendRegister = () => stringify({
  PID: process.pid,
  application_version: '1.0', // TODO update this?
  execName: process.title,
  message_type: 'register',
  plugin_guid: '1a2e44b7-ca8c-46c7-8200-74c8f60ab6cb', // Random UUID
});

const sendToolChange = (sessionId: string, toolId: string) => stringify({
  message_type: 'tool_change',
  reset_options: true,
  session_id: sessionId,
  tool_id: toolId,
});

interface ReceiveMessage {
  message_type: 'register_ack' | 'crown_turn_event' | 'crown_touch_event';
}

interface RegisterMessage extends ReceiveMessage {
  message_type: 'register_ack';
  sequence_id: number;
  session_id: string;
  status: number; // e.g. 200
  enable: boolean;
}

interface CrownMessage extends ReceiveMessage {
  message_type: 'crown_turn_event' | 'crown_touch_event';
  device_id: number;
  unit_id: number;
  feature_id: number;
}

interface CrownTurnMessage extends CrownMessage {
  message_type: 'crown_turn_event';
  task_id: string; // 'chanegtoolvalue'
  task_options: {
    current_tool: string; // e.g. 'slider'
    current_tool_option: string; // e.g. 'numbers2'
  };
  // The number of steps/degrees turned.The value is positive if turned clockwise, negative if turned counter clockwise
  delta: number;
  // The number of ratchet steps turned. The value is positive if turned clockwise, negative if turned counter clockwise
  ratchet_delta: number;
  time_stamp: number;
}

interface CrownTouchMessage extends CrownMessage {
  message_type: 'crown_touch_event';
  touch_state: number; // 0 if the crown was released, 1 if the crown was touched
}

export type ListenerFn = (message: any) => any;

// https://github.com/Logitech/logi_craft_sdk/blob/master/documentation/Craft_Crown_SDK.md
export default class CraftPlugin {
  private ws: WebSocket;
  private emitter: EventEmitter;
  private sessionId: string | undefined;

  constructor() {
    try {
      this.ws = new WebSocket(LOGITECH_OPTIONS_URL);
    } catch (e) {
      console.error('Failed to connect to Logitech Options', e.message);
      throw e;
    }
    this.emitter = new EventEmitter();
    // TODO add reconnection attempts on a timer?
    this.connectWithManager();
  }

  private connectWithManager() {
    this.emitter.emit('connect:begin');
    this.ws.on('open', () => {
      this.sessionId = undefined;
      this.ws.send(sendRegister());
      this.ws.on('message', (data: string) => {
        // route the message
        let message: ReceiveMessage;
        try {
          message = JSON.parse(data);
        } catch (e) {
          throw new Error('Unexpected message from Logi Options server: ' + e.message);
        }
        switch (message.message_type) {
          case 'register_ack':
            this.handleRegisterAck(message as RegisterMessage);
            break;
          case 'crown_turn_event':
            this.handleCrownTurn(message as CrownTurnMessage);
            break;
          case 'crown_touch_event':
            this.handleCrownTouch(message as CrownTouchMessage);
          default:
            break;
        }
      });
    });
  }

  private handleRegisterAck(message: RegisterMessage) {
    // Save the session id as this is used for any subsequent communication with Logi Options
    this.sessionId = message.session_id;
    this.emitter.emit('connect:done');
  }

  private handleCrownTurn(message: CrownTurnMessage) {
    this.emitter.emit('crown:turn', message);
    if (message.ratchet_delta > 0) {
      this.emitter.emit('crown:turn:positive');
    } else if (message.ratchet_delta < 0) {
      this.emitter.emit('crown:turn:negative');
    }
  }

  private handleCrownTouch(message: CrownTouchMessage) {
    this.emitter.emit('crown:touch', message);
    if (message.touch_state === 0) {
      this.emitter.emit('crown:touch:released');
    } else if (message.touch_state === 1) {
      this.emitter.emit('crown:touch:touched');
    }
  }

  public changeTool(toolId: string) {
    if (this.sessionId) {
      this.ws.send(sendToolChange(this.sessionId, toolId));
    } else {
      throw new Error('Not connected yet. Make sure to only send this once the "connect:done" event has occurred');
    }
  }

  public on(type: string, listener: ListenerFn) {
    this.emitter.on(type, listener);
  }

  public once(type: string, listener: ListenerFn) {
    this.emitter.once(type, listener);
  }

  public removeAllListeners(eventName?: string) {
    this.emitter.removeAllListeners(eventName);
  }

  public removeListener(eventName: string, listener: ListenerFn) {
    this.emitter.removeAllListeners(eventName);
  }
}



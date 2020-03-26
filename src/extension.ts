import * as vscode from 'vscode';
import { CraftPlugin } from 'logitech-craft-plugin';
import { installManifest } from './installManifest';

const ENABLE_LOG = true;
const log = (...messages: string[]) => !ENABLE_LOG ? undefined : console.log(...messages);

const GUID = '1a2e44b7-ca8c-46c7-8200-74c8f60ab6cb';

let craftKeyboard: CraftPlugin | undefined;

// Extension is activated
export function activate(_context: vscode.ExtensionContext) {
  function runVsCodeCommandFromSetting(setting: string) {
    const craftConfig = vscode.workspace.getConfiguration('logitechCraft');
    const command = craftConfig.get<string>(setting);
    if (command && !/^\s+$/.test(command)) {
      (vscode.commands.executeCommand(command) as Promise<any>)
        .then(() => log(`- Executed VSCode command '${command}'`))
        .catch(() => console.error(`- Error: unable to execute VSCode command '${command}'`));
    }
  }

  log('logitech-craft-vscode extension running');
  installManifest(GUID).then(() => {
    log('Manifest installed');
    craftKeyboard = new CraftPlugin({ pluginGuid: GUID });
    craftKeyboard.on('connect:begin', () => {
      log('Activating connection to Logi Craft...');
    });
    craftKeyboard.on('connect:done', () => {
      log('Connected to Craft keyboard');
    });
    craftKeyboard.on('connect:failed', (ex) => {
      log('Failed to connect to Craft keyboard', ex);
      vscode.window.showWarningMessage(
        'Unable to connect to Logitech Options. ' +
        'Make sure you enable the plugin in the Logitech Options settings panel.');
    });
    craftKeyboard.on('crown:turn:positive', () => {
      log('\nCrown turn right');
      runVsCodeCommandFromSetting('leftTurn');
    });
    craftKeyboard.on('crown:turn:negative', () => {
      log('\nCrown turn left');
      runVsCodeCommandFromSetting('rightTurn');
    });
    craftKeyboard.on('crown:touch:touched', () => {
      log('\nCrown touched');
      runVsCodeCommandFromSetting('crownTouch');
    });
    craftKeyboard.on('crown:touch:released', () => {
      log('\nCrown released');
      runVsCodeCommandFromSetting('crownRelease');
    });
    // TODO add more tool IDs to the plugin?
  }).catch(e => {
    log(e);
  });
}

// Extension is deactivated
export function deactivate() {
  log('\nDeactivating extension');
  if (craftKeyboard) {
    craftKeyboard.close();
  }
}

import * as vscode from 'vscode';
import CraftPlugin from './CraftPlugin';

let craftKeyboard: CraftPlugin | undefined;

// Extension is activated
export function activate(_context: vscode.ExtensionContext) {
  function runVsCodeCommandFromSetting(setting: string) {
    const craftConfig = vscode.workspace.getConfiguration('logitechCraft');
    const command = craftConfig.get<string>(setting);
    if (command && !/^\w+$/.test(command)) {
      (vscode.commands.executeCommand(command) as Promise<any>)
        .then(() => console.log(`- Executed VSCode command '${command}'`))
        .catch(() => console.error(`- Error: unable to execute VSCode command '${command}'`));
    }
  }

  console.log('Activating connection to Logi Craft...');
  craftKeyboard = new CraftPlugin();
  craftKeyboard.on('connect:done', () => {
    console.log('Connected to Craft keyboard');
  });
  craftKeyboard.on('crown:turn:positive', () => {
    console.log('\nCrown turn right');
    runVsCodeCommandFromSetting('leftTurn');
  });
  craftKeyboard.on('crown:turn:negative', () => {
    console.log('\nCrown turn left');
    runVsCodeCommandFromSetting('rightTurn');
  });
  craftKeyboard.on('crown:touch:touched', () => {
    console.log('\nCrown touched');
    runVsCodeCommandFromSetting('crownTouch');
  });
  craftKeyboard.on('crown:touch:released', () => {
    console.log('\nCrown released');
    runVsCodeCommandFromSetting('crownRelease');
  });
  // TODO add more tool IDs to the plugin?
}

// Extension is deactivated
export function deactivate() {
  console.log('\nDeactivating extension');
  if (craftKeyboard) {
    craftKeyboard.close();
  }
}

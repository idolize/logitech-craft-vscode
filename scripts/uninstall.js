const fs = require('fs-extra');

const GUID = '1a2e44b7-ca8c-46c7-8200-74c8f60ab6cb';

export const uninstallManifest = () => {
  const isWin = process.platform === 'win32';
  const pluginPath = (isWin ? `%ProgramData%\\Logishrd\\LogiOptionsPlugins\\` :
    `~/Library/Application Support/Logitech/Logitech Options/Plugins/`) + GUID;
  fs.remove(pluginPath);
};

uninstallManifest();

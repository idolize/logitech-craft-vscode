import fs from 'fs-extra';
import path from 'path';

export const installManifest = async (guid: string) => {
  // On macOS: copy or symlink the whole folder named 1a2e44b7-ca8c-46c7-8200-74c8f60ab6cb into the `~/Library/Application Support/Logitech/Logitech Options/Plugins` folder.
  // On Windows: copy or symlink the whole folder named 1a2e44b7-ca8c-46c7-8200-74c8f60ab6cb into the `%ProgramData%\Logishrd\LogiOptionsPlugins` folder (you may have to create this folder -- note that is is different from the "LogiOptions\Plugins" folder).

  const isWin = process.platform === 'win32';
  const pluginPath = (isWin ? `%ProgramData%\\Logishrd\\LogiOptionsPlugins\\` :
    `${process.env.HOME}/Library/Application Support/Logitech/Logitech Options/Plugins/`) + guid;
  try {
    await fs.stat(pluginPath);
  } catch (e) {
    await fs.copy(
      path.join(__dirname, `../${guid}`),
      pluginPath,
      {
        overwrite: true,
        recursive: true,
      }
    );
  }
};

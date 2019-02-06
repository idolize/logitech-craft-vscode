# Developer README

## Folder structure

* The `/src` folder contains all of the files necessary for the VS Code extension.
  * `package.json` - this is the manifest file in which you declare the extension details.
  * `src/extension.ts` - this is the main file with the implementation of the extension.
    * The file exports one main function, `activate`, which is called the very first time the extension is activated.
* The other folder (UUID) contains all of the files necessary for the Logitech Options plugin.

## Running VSCode extension locally

* Inside VSCode, press `F5` to open a new window with the extension loaded.
* Set breakpoints in your code inside `src/extension.ts` to debug your extension.
* Find output from your extension in the debug console.
* You can relaunch the extension from the debug toolbar after changing code in `src/extension.ts`.
* You can also reload (`Ctrl+R` or `Cmd+R` on Mac) the VS Code window with your extension to load your changes.

## Testing the real keyboard locally with Logitech Options

* Enable developer mode in Logitech Options
  * Open Logitech Options and click Craft Keyboard image
  * Click "More Settings"
  * Click enable button for "Developer Mode"
* Add the plugin JSON files to the Logitech Options resources folder
  * On macOS: copy or symlink the whole folder named 1a2e44b7-ca8c-46c7-8200-74c8f60ab6cb into the `~/Library/Application Support/Logitech/Logitech Options/Plugins` folder.
  * On Windows: copy or symlink the whole folder named 1a2e44b7-ca8c-46c7-8200-74c8f60ab6cb into the `ProgramData/Logishrd/LogiOptionsPlugins` folder.
* Add development application to Loigtech Options
  * Open Logitech Options and click Craft Keyboard image
  * Click "All Applications" in the top right
  * Scroll to the bottom of the list and click the green bubble with a number next to "Add application" (this green bubble should show up due to the resource folder we added in the last step)
  * Click "Install profiles"
  * Add this application to the list and hit Continue
* Test using the crown with VSCode!

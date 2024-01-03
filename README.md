<p align="center">
  <img src="https://raw.githubusercontent.com/Mohamad-Haikal/dartPartofAndPartGenerator/main/assets/icon.png" alt="Dart Part of And Part Generator - Logo">
</p>

# Dart Part of And Part Generator (VS Code Extension)



[![Latest Release](https://img.shields.io/visual-studio-marketplace/v/MohamadHaikal.dartPartofAndPartGenerator?style=flat&label=VS%20Marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=MohamadHaikal.dartPartofAndPartGenerator)

Simplify and streamline Dart project management with this VS Code extension. It automates the creation of [part of] and [part] directives, enhancing the workflow for Dart developers.


## Features

- Quickly create [part of] and [part] directives in Dart files.
- Enhance and streamline your Dart development workflow by automating the process for better productivity.

## Installation

1. Ensure you have Visual Studio Code version 1.70.0 or higher installed.
2. Launch Visual Studio Code.
3. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac) to open the command palette.
4. Select `Extensions: Install Extensions`.
5. Search for **Dart Part of And Part Generator** by *Mohamad Haikal*.
6. Click **Install** to install the extension.
7. Reload Visual Studio Code.


## Usage

1. Open a Dart file in VS Code.
2. Use the keyboard shortcut `Ctrl+Alt+P` (Windows/Linux) or `Cmd+Alt+P` (Mac) to trigger the extension.
3. Alternatively, you can run the extension from the **Command Palette** by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac), then typing and selecting **Dart: Create 'Part' & 'Part Of'**.
4. The extension will automatically generate [part of] and [part] directives based on your file structure.

This provides flexibility in using the extension according to your preferred workflow.


## Configuration

To customize the default imports file path used by the extension, follow these steps:

1. Open the VS Code settings by pressing `Ctrl + ,` (Windows/Linux) or `Cmd + ,` (Mac) on your keyboard.

2. In the settings search bar, type `DartPartofAndPartGenerator.ImportsFilePath`.

3. You will find a setting labeled **Imports File Path** under the extension's configuration section.

4. Modify the path according to your project structure. The default value is set to `/lib/utils/imports.dart`.

   **Note:** Ensure that the path starts with `/` (forward slash) and is relative to the workspace root.

   **Important:** If the specified file is not found, the extension will automatically create it.

Now, the extension will use the specified file path for managing imports in your Dart project. This customization provides flexibility to adapt the extension to various project setups.


## Issues and Contributions

If you encounter any issues or have suggestions for improvement, please [submit an issue](https://github.com/Mohamad-Haikal/dartPartofAndPartGenerator/issues). Contributions are also welcome!
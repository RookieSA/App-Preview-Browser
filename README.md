# VS Code Browser Extension

A simple Visual Studio Code extension that provides an internal browser for local development.

## Features

- Displays an internal browser within VS Code.
- Useful for previewing local web development projects without leaving the editor.

## Installation

1. Install the extension from the Visual Studio Code Marketplace (once published) or manually via a `.vsix` file.
2. Reload VS Code after installation.

## Usage

1. Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P on Mac).
2. Run the command "Show Internal Browser" to launch the internal browser.

## Development

To set up the project locally:

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run compile` to build the extension.
4. Open the project in VS Code and press F5 to debug.

## Packaging

To package the extension for distribution:

- Run `npm run package` to create a `.vsix` file using `vsce`.

## Requirements

- VS Code version 1.87.0 or higher.

## License

This project is licensed under the MIT License - see the LICENSE.txt file for details.

## Authors

- Ruan Lamprecht (RookieSA)

## Contributing

Feel free to submit issues or pull requests to the repository.
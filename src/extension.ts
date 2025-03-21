import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Your extension "vscode-browser-extension" is now active!');

  let disposable = vscode.commands.registerCommand('extension.showAppPreview', async () => {
    // Get the stored URL for this workspace, default to 'http://127.0.0.1:3000'
    const defaultUrl = context.workspaceState.get('browserUrl', 'http://127.0.0.1:3000');
    
    const url = await vscode.window.showInputBox({
      prompt: 'Enter the URL to preview',
      value: defaultUrl // Use the stored URL as the default
    });

    // If the user cancels, don't proceed
    if (!url) {
      return;
    }

    // Store the entered URL in workspace state
    await context.workspaceState.update('browserUrl', url);

    // Get the project name from the workspace
    const projectName = vscode.workspace.name || 'Untitled Project';

    const panel = vscode.window.createWebviewPanel(
      'localBrowser',
      projectName, // Use project name as the title
      vscode.ViewColumn.Beside,
      {
        enableScripts: true,
        retainContextWhenHidden: true,
        localResourceRoots: [vscode.Uri.file(`${context.extensionPath}/media`)],
      }
    );

    panel.webview.html = getWebviewContent(url);
  });

  context.subscriptions.push(disposable);
}

function getWebviewContent(url: string): string {
  return `
    <html>
      <head>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
          }
          iframe {
            width: 100%;
            height: 100%;
            border: none;
          }
        </style>
      </head>
      <body>
        <iframe src="${url}" sandbox="allow-scripts allow-forms allow-same-origin"></iframe>
      </body>
    </html>
  `;
}

export function deactivate() {}
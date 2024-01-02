import * as vscode from 'vscode';

import { AutoPartOfFunctions } from './utils/functions';
import { Constants } from './utils/constants';

export class AutoPartOfProvider {
  async CreatePartofAndPart() {
    const functions = new AutoPartOfFunctions();
    const workspaceUri = vscode.workspace.workspaceFolders[0].uri;
    const activeTextEditor = vscode.window.activeTextEditor;
    const masterFileUri = await functions.getMasterFilePathFromUserConfiguration(workspaceUri, Constants.configSection, Constants.configProperty);
    var activeFileUri: vscode.Uri;
    
    if (activeTextEditor === undefined) {
      vscode.window.showErrorMessage('No active text editor')
      return;
    } else {
      activeFileUri = activeTextEditor.document.uri;
    }

    const result = await functions.createRelativePathes(activeFileUri.fsPath,masterFileUri.fsPath)
    const relativePathToMaster = result.relativePathToMaster;
    const relativePathToChild = result.relativePathToChild;

    await functions.createFileIfNotExist(masterFileUri)
    await functions.insertPartOf(relativePathToMaster)
    await functions.insertPart(masterFileUri,relativePathToChild,await functions.readFile(masterFileUri))
    vscode.window.showInformationMessage(`Parted Successfully`);
  }
}
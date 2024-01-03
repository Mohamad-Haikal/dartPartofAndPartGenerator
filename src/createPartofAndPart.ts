import * as vscode from 'vscode';

import { AutoPartOfFunctions } from './utils/functions';
import { Constants } from './utils/constants';
import { readFile } from 'fs';
import { getRelativePath } from './utils/relative-path';

export class PartofAndPartCreator {
  async CreatePartofAndPart() {
    
    var activeTextEditor: vscode.TextEditor;
    if (vscode.window.activeTextEditor === undefined) {
      vscode.window.showErrorMessage('No active text editor')
      return;
    } else {
      activeTextEditor = vscode.window.activeTextEditor;
    }

    const functions = new AutoPartOfFunctions();
    const workspaceUri = vscode.workspace.workspaceFolders[0].uri;
    const masterFileUri = await functions.getMasterFilePathFromUserConfiguration(workspaceUri, Constants.configSection, Constants.configProperty);
    var activeFileUri = activeTextEditor.document.uri;
    

    const relativePathToChild = getRelativePath(masterFileUri.fsPath,activeFileUri.fsPath)
    const relativePathToMaster = getRelativePath(activeFileUri.fsPath,masterFileUri.fsPath)

    
    await functions.createFileIfNotExist(masterFileUri)


    if (await functions.checkIfContain(activeFileUri, relativePathToMaster) === false) {
      await functions.insertPartOf(relativePathToMaster)
    }
    

    if (await functions.checkIfContain(masterFileUri, relativePathToChild) === false) {
      await functions.insertPart(masterFileUri, relativePathToChild)
    }

    vscode.window.showInformationMessage(`𝑷𝒂𝒓𝒕 & 𝑷𝒂𝒓𝒕 𝑶𝒇 generated successfully`);
  }
}
import * as vscode from 'vscode';

import { Constants } from './constants';

export class AutoPartOfFunctions {

    async getMasterFilePathFromUserConfiguration(workspaceUri: vscode.Uri, configSection: string, configProperty: string) {
        const userMasterFileConfig = vscode.workspace.getConfiguration(configSection).get(configProperty, Constants.defaultImportsFilePath);
        const masterFileUri = vscode.Uri.parse(workspaceUri.path + userMasterFileConfig);
        return masterFileUri;
    }

    async createFileIfNotExist(uri: vscode.Uri): Promise<void> {
        try {
            await vscode.workspace.fs.readFile(uri)
        } catch (error) {
            await vscode.workspace.fs.writeFile(uri, new TextEncoder().encode(''));
            vscode.window.showWarningMessage('Master file not found, we will create a new one');
        }
    }

    async readFile(uri: vscode.Uri): Promise<string> {
        const encodedContent = await vscode.workspace.fs.readFile(uri);
        const decodedContent = new TextDecoder().decode(encodedContent);
        return decodedContent;
    }

    async checkIfContain(checkfileUri: vscode.Uri, textToCheck: string) : Promise<boolean>{
        const fileContent = await this.readFile(checkfileUri);
        const isExist = fileContent.includes(textToCheck);
        return isExist;
    }

    async insertPartOf(relativePathToMaster: string) {
        await vscode.window.activeTextEditor.insertSnippet(new vscode.SnippetString(`part of '${relativePathToMaster}';\n`), new vscode.Position(0, 0))
    }

    async insertPart(masterFileUri: vscode.Uri, relativePathToChild: string) {
        const currentMasterFileContent = await this.readFile(masterFileUri);
        await vscode.workspace.fs.writeFile(masterFileUri, new TextEncoder().encode(currentMasterFileContent + `\npart '${relativePathToChild}';`));
    }
}
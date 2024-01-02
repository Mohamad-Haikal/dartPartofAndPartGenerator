import * as vscode from 'vscode';

import { getRelativePath } from './relative-path';
import { Constants } from './constants';

export class AutoPartOfFunctions {

    async getMasterFilePathFromUserConfiguration(workspaceUri: vscode.Uri, configSection: string, configProperty: string) {
        const userMasterFileConfig = vscode.workspace.getConfiguration(configSection).get(configProperty, Constants.defaultImportsFilePath);
        const masterFileUri = vscode.Uri.parse(workspaceUri.path + userMasterFileConfig);
        return masterFileUri;
    }

    async createRelativePathes(activeFile: string, masterFile: string): Promise<{ relativePathToMaster: string; relativePathToChild: string; }> {
        const relativePathToMaster = getRelativePath(activeFile, masterFile);
        const relativePathToChild = getRelativePath(masterFile, activeFile);
        return { relativePathToMaster, relativePathToChild }
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

    async insertPartOf(relativePathToMaster: string) {
        await vscode.window.activeTextEditor.insertSnippet(new vscode.SnippetString(`part of '${relativePathToMaster}';\n`), new vscode.Position(0, 0))
    }

    async insertPart(masterFileUri: vscode.Uri, relativePathToChild: string, currentMasterFileContent: string) {
        await vscode.workspace.fs.writeFile(masterFileUri, new TextEncoder().encode(currentMasterFileContent + `\npart '${relativePathToChild}';`));
    }
}
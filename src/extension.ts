import * as vscode from 'vscode';

import { AutoPartOfProvider } from './createPartofAndPart';
import { Constants } from './utils/constants';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      Constants.extCommand,
      () => new AutoPartOfProvider().CreatePartofAndPart(),
    )
  );
}
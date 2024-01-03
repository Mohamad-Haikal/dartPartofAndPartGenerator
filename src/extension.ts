import * as vscode from 'vscode';

import { PartofAndPartCreator } from './createPartofAndPart';
import { Constants } from './utils/constants';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      Constants.extCommand,
      () => new PartofAndPartCreator().CreatePartofAndPart(),
    )
  );
}
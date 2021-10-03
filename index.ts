import { labeledLog } from './utils/console-logger';
import { waitElementRender } from './utils/wait-element-render';
import { isAlreadyRunningExtension } from './utils/extension-running-checker';

export const webExtensionUtils = {
  labeledLog,
  waitElementRender,
  isAlreadyRunningExtension,
}

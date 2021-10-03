import { labeledLog } from './utils/console-logger';
import { waitElementRender } from './utils/wait-element-render';
import { isAlreadyRunningExtension } from './utils/extension-running-checker';

const webExtensionBase = {
  utils: {
    labeledLog,
    waitElementRender,
    isAlreadyRunningExtension,
  }
};

export default webExtensionBase;

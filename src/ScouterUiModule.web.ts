import { registerWebModule, NativeModule } from 'expo';

import { ScouterUiModuleEvents } from './ScouterUi.types';

class ScouterUiModule extends NativeModule<ScouterUiModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ScouterUiModule, 'ScouterUiModule');

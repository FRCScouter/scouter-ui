import { NativeModule, requireNativeModule } from 'expo';

import { ScouterUiModuleEvents } from './ScouterUi.types';

declare class ScouterUiModule extends NativeModule<ScouterUiModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ScouterUiModule>('ScouterUi');

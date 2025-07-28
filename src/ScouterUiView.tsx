import { requireNativeView } from 'expo';
import * as React from 'react';

import { ScouterUiViewProps } from './ScouterUi.types';

const NativeView: React.ComponentType<ScouterUiViewProps> =
  requireNativeView('ScouterUi');

export default function ScouterUiView(props: ScouterUiViewProps) {
  return <NativeView {...props} />;
}

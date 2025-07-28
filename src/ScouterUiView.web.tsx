import * as React from 'react';

import { ScouterUiViewProps } from './ScouterUi.types';

export default function ScouterUiView(props: ScouterUiViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}

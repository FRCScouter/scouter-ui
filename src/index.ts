// Reexport the native module. On web, it will be resolved to ScouterUiModule.web.ts
// and on native platforms to ScouterUiModule.ts
export { default } from './ScouterUiModule';
export { default as ScouterUiView } from './ScouterUiView';
export * from  './ScouterUi.types';

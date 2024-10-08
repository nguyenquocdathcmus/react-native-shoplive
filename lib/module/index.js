import { NativeModules, Platform } from 'react-native';
export { default as ShopliveJSModule } from './ShopliveJSModule';
const LINKING_ERROR = `The package 'react-native-shoplive-module' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const ShopliveModule = NativeModules.ShopliveModule ? NativeModules.ShopliveModule : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
export function multiply(a, b) {
  return ShopliveModule.multiply(a, b);
}
//# sourceMappingURL=index.js.map
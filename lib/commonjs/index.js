"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ShopliveJSModule", {
  enumerable: true,
  get: function () {
    return _ShopliveJSModule.default;
  }
});
exports.multiply = multiply;
var _reactNative = require("react-native");
var _ShopliveJSModule = _interopRequireDefault(require("./ShopliveJSModule"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const LINKING_ERROR = `The package 'react-native-shoplive-module' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const ShopliveModule = _reactNative.NativeModules.ShopliveModule ? _reactNative.NativeModules.ShopliveModule : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
function multiply(a, b) {
  return ShopliveModule.multiply(a, b);
}
//# sourceMappingURL=index.js.map
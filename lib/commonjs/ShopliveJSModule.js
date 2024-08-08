"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _EventEmitter = require("./EventEmitter");
const {
  ShopliveModule
} = _reactNative.NativeModules;
class ShopliveJSModule {
  onHandleNavigation = listener => {
    (0, _EventEmitter.addEventListener)('handleNavigation', payload => listener(payload));
  };
  onDownloadCoupon = listener => {
    (0, _EventEmitter.addEventListener)('downloadCoupon', payload => listener(payload));
  };
  onReceivedCommand = listener => {
    (0, _EventEmitter.addEventListener)('onReceivedCommand', payload => listener(payload));
  };
  onError = listener => {
    (0, _EventEmitter.addEventListener)('onError', payload => listener(payload));
  };
  onPlayerClosing = listener => {
    (0, _EventEmitter.addEventListener)('playerClosing', payload => listener(payload));
  };
  onPlayerDestroyed = listener => {
    (0, _EventEmitter.addEventListener)('playerDestroyed', payload => listener(payload));
  };
  onPlayerCreated = listener => {
    (0, _EventEmitter.addEventListener)('playerCreated', payload => listener(payload));
  };
  removeListeners = () => {
    (0, _EventEmitter.removeEventListener)('handleNavigation');
    (0, _EventEmitter.removeEventListener)('downloadCoupon');
    (0, _EventEmitter.removeEventListener)('CLICK_PRODUCT_DETAIL');
    (0, _EventEmitter.removeEventListener)('onError');
    (0, _EventEmitter.removeEventListener)('playerClosing');
    (0, _EventEmitter.removeEventListener)('playerDestroyed');
    (0, _EventEmitter.removeEventListener)('playerCreated');
  };
  setAccessKey(accessKey) {
    ShopliveModule.setAccessKey(accessKey);
  }
  play(campaignKey) {
    console.log('playShoplive', campaignKey);
    ShopliveModule.play(campaignKey);
  }
  setShareUrl(url) {
    ShopliveModule.setShareUrl(url);
  }
}
var _default = exports.default = ShopliveJSModule;
//# sourceMappingURL=ShopliveJSModule.js.map
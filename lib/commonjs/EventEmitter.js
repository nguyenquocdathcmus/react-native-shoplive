"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeEventListener = exports.addEventListener = void 0;
var _reactNative = require("react-native");
// Note that this is a singleton in ES6 module
const emitter = new _reactNative.NativeEventEmitter(_reactNative.NativeModules.ShopliveModule);
const subscriptions = {};
const addEventListener = (event, handler) => {
  console.log(`${event} added`);
  const subscription = emitter.addListener(event, handler);
  const existingSubscription = subscriptions[event];
  if (existingSubscription) {
    existingSubscription.remove();
  }
  subscriptions[event] = subscription;
};
exports.addEventListener = addEventListener;
const removeEventListener = event => {
  const existingSubscription = subscriptions[event];
  if (existingSubscription) {
    existingSubscription.remove();
    delete subscriptions[event];
  }
};
exports.removeEventListener = removeEventListener;
//# sourceMappingURL=EventEmitter.js.map
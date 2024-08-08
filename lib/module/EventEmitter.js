import { NativeModules, NativeEventEmitter } from 'react-native';
// Note that this is a singleton in ES6 module
const emitter = new NativeEventEmitter(NativeModules.ShopliveModule);
const subscriptions = {};
export const addEventListener = (event, handler) => {
  console.log(`${event} added`);
  const subscription = emitter.addListener(event, handler);
  const existingSubscription = subscriptions[event];
  if (existingSubscription) {
    existingSubscription.remove();
  }
  subscriptions[event] = subscription;
};
export const removeEventListener = event => {
  const existingSubscription = subscriptions[event];
  if (existingSubscription) {
    existingSubscription.remove();
    delete subscriptions[event];
  }
};
//# sourceMappingURL=EventEmitter.js.map
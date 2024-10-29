import { NativeModules } from 'react-native';
const {
  ShopliveModule
} = NativeModules;
import { addEventListener, removeEventListener } from './EventEmitter';
class ShopliveJSModule {
  onHandleNavigation = listener => {
    addEventListener('handleNavigation', payload => listener(payload));
  };
  onDownloadCoupon = listener => {
    addEventListener('downloadCoupon', payload => listener(payload));
  };
  onReceivedCommand = listener => {
    addEventListener('onReceivedCommand', payload => listener(payload));
  };
  onError = listener => {
    addEventListener('onError', payload => listener(payload));
  };
  onPlayerClosing = listener => {
    addEventListener('playerClosing', payload => listener(payload));
  };
  onPlayerDestroyed = listener => {
    addEventListener('playerDestroyed', payload => listener(payload));
  };
  onPlayerCreated = listener => {
    addEventListener('playerCreated', payload => listener(payload));
  };
  removeListeners = () => {
    removeEventListener('handleNavigation');
    removeEventListener('downloadCoupon');
    removeEventListener('CLICK_PRODUCT_DETAIL');
    removeEventListener('onError');
    removeEventListener('playerClosing');
    removeEventListener('playerDestroyed');
    removeEventListener('playerCreated');
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

 startPictureInPicture() {
  ShopliveModule.startPictureInPicture()
 }
 stopPictureInPicture() {
  ShopliveModule.stopPictureInPicture()
 }

}
export default ShopliveJSModule;
//# sourceMappingURL=ShopliveJSModule.js.map
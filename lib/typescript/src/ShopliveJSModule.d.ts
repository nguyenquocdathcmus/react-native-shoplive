import type { EventData } from './EventEmitter';
declare class ShopliveJSModule {
    onHandleNavigation: (listener: (payload: EventData) => void) => void;
    onDownloadCoupon: (listener: (payload: EventData) => void) => void;
    onReceivedCommand: (listener: (payload: EventData) => void) => void;
    onError: (listener: (payload: EventData) => void) => void;
    onPlayerClosing: (listener: (payload: EventData) => void) => void;
    onPlayerDestroyed: (listener: (payload: EventData) => void) => void;
    onPlayerCreated: (listener: (payload: EventData) => void) => void;
    removeListeners: () => void;
    setAccessKey(accessKey: string): void;
    play(campaignKey: string): void;
    setShareUrl(url: string): void;
}
export default ShopliveJSModule;
//# sourceMappingURL=ShopliveJSModule.d.ts.map
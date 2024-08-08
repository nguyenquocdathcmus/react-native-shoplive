export type EventData = {
    data: string;
};
export type eventHandler = (payload: EventData) => void;
export declare const addEventListener: (event: string, handler: eventHandler) => void;
export declare const removeEventListener: (event: string) => void;
//# sourceMappingURL=EventEmitter.d.ts.map
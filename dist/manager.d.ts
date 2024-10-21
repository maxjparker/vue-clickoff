export interface ClickAwayListener {
    callback: CallableFunction;
    el: Node;
    relative?: Node;
}
export declare class ClickAwayManager {
    private static instance;
    private store;
    private constructor();
    static get(): ClickAwayManager;
    register(unit: ClickAwayListener): void;
    unregister(el: Node): void;
    getStore(): ClickAwayListener[];
    private processClick;
    private shouldRunHook;
}

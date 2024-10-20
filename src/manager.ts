export interface ClickAwayListener {
  callback: CallableFunction;
  el: Node;
  relative?: Node
}

export class ClickAwayManager {
  private static instance: ClickAwayManager;
  private store: ClickAwayListener[] = [];

  private constructor() {
    document.addEventListener('click', (event) => {
      this.processClick(event);
    }, { capture: true });
  }

  public static get(): ClickAwayManager {
    if (!ClickAwayManager.instance) {
      ClickAwayManager.instance = new ClickAwayManager();
    }
    return ClickAwayManager.instance;
  }

  public register(unit: ClickAwayListener): void {
    this.store.push(unit);
  }

  public unregister(el: Node): void {
    this.store = this.store.filter(unit => unit.el !== el);
  }

  public getStore(): ClickAwayListener[] {
    return this.store
  }

  private processClick(event: MouseEvent | PointerEvent): void {
    for (const unit of this.store) {
      if (this.shouldRunHook(unit, event)) {
        unit.callback(event);
      }
    }
  }

  private shouldRunHook(
    listener: ClickAwayListener, 
    click: MouseEvent | PointerEvent
  ): boolean {
    return !listener.el.contains(click.target as Node) 
      && !listener.relative?.contains(click.target as Node);
  }
}
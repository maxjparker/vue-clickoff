export interface ClickOffConfig {
  hook: CallableFunction;
  el: Node;
  relative?: Node
}

export class ClickOffManager {
  private static instance: ClickOffManager;
  private store: ClickOffConfig[] = [];

  private constructor() {
    document.addEventListener('click', (event) => {
      this.processClick(event);
    }, { capture: true });
  }

  public static get(): ClickOffManager {
    if (!ClickOffManager.instance) {
      ClickOffManager.instance = new ClickOffManager();
    }
    return ClickOffManager.instance;
  }

  public register(unit: ClickOffConfig): void {
    this.store.push(unit);
  }

  public unregister(el: Node): void {
    this.store = this.store.filter(unit => unit.el !== el);
  }

  public getStore(): ClickOffConfig[] {
    return this.store
  }

  private processClick(event: MouseEvent | PointerEvent): void {
    for (const unit of this.store) {
      if (this.shouldRunHook(unit, event)) {
        unit.hook(event);
      }
    }
  }

  private shouldRunHook(unit: ClickOffConfig, click: MouseEvent | PointerEvent): boolean {
    return !unit.el.contains(click.target as Node) && !unit.relative?.contains(click.target as Node);
  }
}
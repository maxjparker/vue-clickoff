var a = Object.defineProperty;
var i = (r, t, e) => t in r ? a(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var n = (r, t, e) => i(r, typeof t != "symbol" ? t + "" : t, e);
const s = class s {
  constructor() {
    n(this, "store", []);
    document.addEventListener("click", (t) => {
      this.processClick(t);
    }, { capture: !0 });
  }
  static get() {
    return s.instance || (s.instance = new s()), s.instance;
  }
  register(t) {
    this.store.push(t);
  }
  unregister(t) {
    this.store = this.store.filter((e) => e.el !== t);
  }
  getStore() {
    return this.store;
  }
  processClick(t) {
    for (const e of this.store)
      this.shouldRunHook(e, t) && e.callback(t);
  }
  shouldRunHook(t, e) {
    var c;
    return !t.el.contains(e.target) && !((c = t.relative) != null && c.contains(e.target));
  }
};
n(s, "instance");
let o = s;
const l = {
  mounted(r, t) {
    const e = o.get();
    if (t.arg) {
      e.register({
        callback: t.value,
        el: r,
        relative: document.getElementById(t.arg)
      });
      return;
    }
    e.register({
      callback: t.value,
      el: r
    });
  },
  unmounted(r) {
    o.get().unregister(r);
  }
};
export {
  l as directive
};

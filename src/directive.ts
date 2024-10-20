import type { Directive } from 'vue';
import { ClickAwayManager } from './manager';

export const directive: Directive = {
  mounted(el, binding) {
    const manager = ClickAwayManager.get();
    if (binding.arg) {
      manager.register({
        callback: binding.value,
        el: el,
        relative: document.getElementById(binding.arg) as Node
      });
      return;
    }
    manager.register({
      callback: binding.value,
      el: el,
    });
  },
  unmounted(el) {
    const manager = ClickAwayManager.get();
    manager.unregister(el);
  }
};
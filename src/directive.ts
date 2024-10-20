import type { Directive } from 'vue';
import { ClickOffManager } from './manager';

export const vClickOff: Directive = {
  mounted(el, binding) {
    const manager = ClickOffManager.get();
    if (binding.arg) {
      manager.register({
        hook: binding.value,
        el: el,
        relative: document.getElementById(binding.arg) as Node
      });
      return;
    }
    manager.register({
      hook: binding.value,
      el: el,
    });
  },
  unmounted(el) {
    const manager = ClickOffManager.get();
    manager.unregister(el);
  }
};
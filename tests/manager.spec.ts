import { expect, it,  } from "vitest";
import { type ClickAwayListener, ClickAwayManager } from '../src/manager'

it('registers and unregisters new config objects', () => {
  const manager = ClickAwayManager.get()
  const el = document.createElement('div')

  const listener: ClickAwayListener = {
    el: el,
    callback: () => {}
  }

  manager.register(listener)

  expect(manager.getStore()).toEqual([listener])

  manager.unregister(el)

  expect(manager.getStore()).toEqual([])
})



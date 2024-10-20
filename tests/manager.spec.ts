import { expect, it,  } from "vitest";
import { type ClickOffConfig, ClickOffManager } from '../src/manager'

it('registers and unregisters new config objects', () => {
  const manager = ClickOffManager.get()
  const el = document.createElement('div')

  const config: ClickOffConfig = {
    el: el,
    hook: () => {}
  }

  manager.register(config)

  expect(manager.getStore()).toEqual([config])

  manager.unregister(el)

  expect(manager.getStore()).toEqual([])
})



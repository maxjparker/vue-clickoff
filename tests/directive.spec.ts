import { expect, it,  } from "vitest";
import { render } from 'vitest-browser-vue'
import TestDirective from "./TestDirective.vue";

it('triggers a hook when clicked off element', async () => {
  let handlerTriggered = false;
  const screen = render(TestDirective, {
    props: {
      handler: (e: MouseEvent) => {
        handlerTriggered = true
      }
    }
  })
  await screen.getByTestId('outside').click();
  expect(handlerTriggered).toBe(true)
})

it('does not trigger a hook when clicked inside area', async () => {
  let handlerTriggered = false;
  const screen = render(TestDirective, {
    props: {
      handler: (e: MouseEvent) => {
        handlerTriggered = true
      }
    }
  })
  await screen.getByTestId('inside').click();
  expect(handlerTriggered).toBe(false)
})

it('does not trigger a hook when relative is clicked ', async () => {
  let handlerTriggered = false;
  const screen = render(TestDirective, {
    props: {
      handler: (e: MouseEvent) => {
        handlerTriggered = true
      }
    }
  })
  await screen.getByTestId('relative').click();
  expect(handlerTriggered).toBe(false)
})
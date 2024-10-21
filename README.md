# Intro

Yep. Yet another Vue click-away directive.

# Install

`npm i v-click-away`

# Usage

```html
<MyModal :open="isModalOpen" v-click-away="isModalOpen = false">
  ...
</MyModal>
```

If an element that triggers the modal to open is not a child of the modal, sometimes the modal
won't open because clicking the open triggers it to close! In this scenario, use the directive's
arg to select a trigger element (by id):

```html
<button id="button-id">Open Modal</button>
<MyModal :open="isModalOpen" v-click-away:['button-id']="isModalOpen = false">
  ...
</MyModal>
```

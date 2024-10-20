# Install

`npm i vue-clickoff`

# Usage

```html
<MyModal :open="isModalOpen" v-click-off="isModalOpen = false">
  ...
</MyModal>
```

If an element that triggers the modal to open is not a child of the modal, sometimes the modal
won't open because clicking the open triggers it to close! In this scenario, use the directive's
arg to select a trigger element (by id)

```html
<button id="button-id">Open Modal</button>
<MyModal :open="isModalOpen" v-click-off:['button-id']="isModalOpen = false">
  ...
</MyModal>
```
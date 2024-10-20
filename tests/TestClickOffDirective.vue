<script setup lang="ts">
import { vClickOff } from '../src/directive'

const props = defineProps<{
  handler: (e: MouseEvent) => void
}>()

const relativeId = 'relative-id'
</script>

<template>
  <button :id="relativeId" data-testid="relative">Relative: Should not trigger ClickOff</button>
  <section v-click-off:[relativeId]="props.handler">
    <button data-testid="inside">Should not trigger ClickOff</button>
  </section>
  <section>
    <button data-testid="outside">Trigger ClickOff</button>
  </section>
</template>
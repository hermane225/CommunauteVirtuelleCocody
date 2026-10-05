<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="open"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        role="dialog"
        aria-modal="true"
        :aria-label="label"
      >
        <div class="absolute inset-0 bg-ink/85 backdrop-blur-sm" @click="$emit('close')"></div>
        <div class="modal-panel relative flex max-h-full w-full justify-center">
          <slot />
        </div>
        <button
          type="button"
          class="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-soft transition hover:bg-leaf-300"
          aria-label="Fermer"
          @click="$emit('close')"
        >
          <XMarkIcon class="h-5 w-5" />
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch, onBeforeUnmount } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  open: { type: Boolean, default: false },
  label: { type: String, default: '' },
})
const emit = defineEmits(['close'])

function onKeydown(event) {
  if (event.key === 'Escape') emit('close')
}

function lock(locked) {
  document.body.style.overflow = locked ? 'hidden' : ''
  if (locked) window.addEventListener('keydown', onKeydown)
  else window.removeEventListener('keydown', onKeydown)
}

watch(() => props.open, lock)
onBeforeUnmount(() => lock(false))
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-active .modal-panel,
.modal-leave-active .modal-panel {
  transition: transform 0.3s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-panel,
.modal-leave-to .modal-panel {
  transform: translateY(16px) scale(0.98);
}
</style>

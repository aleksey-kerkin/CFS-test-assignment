<script setup lang="ts">
defineProps<{
  disabled?: boolean;
}>();
</script>

<template>
  <button :disabled="disabled" class="bg-zinc-700 px-2 py-4 text-white/80">
    <slot />
  </button>
</template>

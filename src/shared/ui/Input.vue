<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const handleInput = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="handleInput"
    ,
    class="mb-4 w-full p-2"
    placeholder="Search posts..."
  />
</template>

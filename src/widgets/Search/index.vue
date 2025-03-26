<script setup lang="ts">
import { ref, watch } from "vue";
import Input from "@/shared/ui/Input.vue";

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const searchValue = ref(props.modelValue);

watch(searchValue, (newVal) => {
  emit("update:modelValue", newVal);
});
</script>

<template>
  <div class="border-2">
    <Input v-model="searchValue" />
  </div>
</template>

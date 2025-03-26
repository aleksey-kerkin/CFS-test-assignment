<script setup lang="ts">
import Button from "@/shared/ui/Button.vue";

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits(["update:currentPage"]);

const handlePageChange = (page: number) => {
  if (page < 1 || page > props.totalPages) return;
  emit("update:currentPage", page);
};
</script>

<template>
  <div class="my-8 flex justify-center gap-4">
    <Button
      @click="handlePageChange(currentPage - 1)"
      :disabled="currentPage === 1"
    >
      Previous
    </Button>

    <span class="text-sm"> Page {{ currentPage }} of {{ totalPages }} </span>

    <Button
      @click="handlePageChange(currentPage + 1)"
      :disabled="currentPage === totalPages"
    >
      Next
    </Button>
  </div>
</template>

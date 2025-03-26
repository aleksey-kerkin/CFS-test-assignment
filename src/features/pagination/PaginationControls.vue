<template>
  <div class="mt-4 flex items-center justify-between">
    <button
      @click="prevPage"
      :disabled="currentPage === 1"
      class="cursor-pointer rounded bg-gray-200 px-4 py-2 shadow-sm shadow-zinc-500/50 duration-200 hover:bg-zinc-700 hover:text-white/90 disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-black/50 disabled:shadow-none"
    >
      Previous
    </button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="cursor-pointer rounded bg-gray-200 px-4 py-2 shadow-sm shadow-zinc-500/50 duration-200 hover:bg-zinc-700 hover:text-white/90 disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-black/50 disabled:shadow-none"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { usePostStore } from "@/app/providers/store";
import { computed } from "vue";

const postStore = usePostStore();
const currentPage = computed({
  get: () => postStore.currentPage,
  set: (value) => (postStore.currentPage = value),
});
const totalPages = computed(() => postStore.totalPages);

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
</script>

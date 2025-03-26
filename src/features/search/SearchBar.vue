<template>
  <input
    v-model="searchQuery"
    placeholder="Search posts..."
    class="mb-4 w-full rounded-md border border-zinc-300 p-2 shadow-md focus:ring-1 focus:ring-blue-500 focus:outline-none"
  />
</template>

<script setup lang="ts">
import { usePostStore } from "@/app/providers/store";
import { computed } from "vue";

const postStore = usePostStore();
const searchQuery = computed({
  get: () => postStore.searchQuery,
  set: (value) => postStore.setSearchQuery(value),
});
</script>

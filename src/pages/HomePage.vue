<template>
  <div class="container mx-auto min-h-screen place-content-center p-4">
    <h1 class="mb-8 text-center text-4xl font-bold">Vue Posts App</h1>
    <SearchBar />
    <div v-if="loading" class="animate-pulse py-4 text-center">
      Loading posts...
    </div>
    <div v-else-if="paginatedPosts.length">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <PostCard v-for="post in paginatedPosts" :key="post.id" :post="post" />
      </div>
      <PaginationControls />
    </div>
    <div v-else class="py-4 text-center">No posts found</div>
  </div>
</template>

<script setup lang="ts">
import { usePostStore } from "@/app/providers/store";
import PostCard from "@/widgets/post-card/PostCard.vue";
import SearchBar from "@/features/search/SearchBar.vue";
import PaginationControls from "@/features/pagination/PaginationControls.vue";
import { computed, onMounted } from "vue";

const postStore = usePostStore();

onMounted(() => {
  if (!postStore.posts.length) postStore.loadPosts();
});

const paginatedPosts = computed(() => postStore.paginatedPosts);
const loading = computed(() => postStore.loading);
</script>

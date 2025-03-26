<script setup lang="ts">
import type { Post } from "@/entities/post/types";
import PostListItem from "./components/PostListItem.vue";

defineProps<{
  posts: Post[];
}>();
</script>

<template>
  <div>
    <PostListItem v-for="post in posts" :key="post.id" :post="post" />
    <div v-if="!posts.length">No posts found matching your criteria...</div>
  </div>
</template>

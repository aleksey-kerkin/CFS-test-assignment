<template>
  <router-link :to="`/post/${post.id}`" class="block">
    <div
      class="rounded-md border border-zinc-300 bg-zinc-100 p-4 shadow-md ring-1 shadow-zinc-500/50 ring-zinc-300/30 duration-200 hover:-translate-y-2 hover:shadow-xl hover:ring-blue-300"
    >
      <h2 class="truncate text-lg font-semibold">{{ post.title }}</h2>
      <p class="line-clamp-2 text-gray-600">{{ post.body }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { Post } from "@/entities/post/model";

defineProps<{
  post: Post;
}>();
</script>

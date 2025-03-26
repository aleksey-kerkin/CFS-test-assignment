<script setup lang="ts">
import type { Post } from "@/entities/post/types";
import { useRouter } from "vue-router";

const props = defineProps<{
  post: Post;
}>();

const router = useRouter();

const navigateToPost = () => {
  router.push(`/post/${props.post.id}`);
};
</script>

<template>
  <div
    class="my-4 cursor-pointer rounded-lg border border-zinc-500 p-4 duration-200 hover:bg-zinc-400"
    @click="navigateToPost"
  >
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
</template>

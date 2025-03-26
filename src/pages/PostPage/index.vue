<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { getPostById } from "@/shared/api/posts";
import type { Post } from "@/entities/post/types";

const props = defineProps<{
  id: string;
}>();

const router = useRouter();
const post = ref<Post | null>(null);
const isLoading = ref(true);

onMounted(async () => {
  const postId = parseInt(props.id);
  if (isNaN(postId)) {
    router.push("/");
    return;
  }

  const data = await getPostById(postId);
  post.value = data;
  isLoading.value = false;
});
</script>

<template>
  <div>
    <button @click="router.back()">&larr; Back</button>

    <div v-if="isLoading" class="animate-pulse">Loading...</div>

    <template v-else>
      <div v-if="post">
        <h2 class="text-2xl">{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
      <div v-else>Post not found.</div>
    </template>
  </div>
</template>

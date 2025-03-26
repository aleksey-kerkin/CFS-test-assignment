<template>
  <div class="container mx-auto min-h-screen place-content-center p-4">
    <div v-if="loading" class="animate-pulse py-4 text-center">Loading...</div>
    <div
      v-else-if="post"
      class="rounded-se-md rounded-b-md border-l-4 border-blue-500/50 py-4 pr-4 pl-8 shadow-md ring-2 shadow-zinc-500/50 ring-blue-300"
    >
      <h1 class="mb-4 text-2xl font-bold text-balance">
        {{ post.title }}
      </h1>
      <p class="mb-4 text-gray-700">{{ post.body }}</p>
      <router-link
        to="/"
        class="text-blue-500 underline-offset-2 hover:text-blue-500/50 hover:underline active:text-blue-900"
      >
        Back to Home
      </router-link>
    </div>
    <div v-else class="py-4 text-center">
      <h1 class="text-3xl">404</h1>
      <p class="mb-6 text-2xl">Post not found</p>
      <router-link
        to="/"
        class="text-blue-500 underline-offset-2 hover:text-blue-500/50 hover:underline active:text-blue-900"
      >
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { usePostStore } from "@/app/providers/store";
import { fetchPost } from "@/shared/api/instance";
import type { Post } from "@/entities/post/model";

const route = useRoute();
const postStore = usePostStore();
const post = ref<Post | null>(null);
const loading = ref(true);

const loadPost = async () => {
  loading.value = true;
  const id = Number(route.params.id);
  if (isNaN(id)) {
    post.value = null;
    loading.value = false;
    return;
  }

  // Get post from store; it will be Post | undefined
  const storedPost = postStore.posts.find((p) => p.id === id);
  if (storedPost) {
    // If found in store, assign directly to post.value (type Post)
    post.value = storedPost;
  } else {
    // If not found, try fetching from API
    try {
      const fetchedPost = await fetchPost(id);
      post.value = fetchedPost; // Assign Post to post.value
    } catch (error) {
      console.error("Failed to load post:", error);
      post.value = null; // Assign null on error
    }
  }
  loading.value = false;
};

onMounted(loadPost);
watch(() => route.params.id, loadPost);
</script>

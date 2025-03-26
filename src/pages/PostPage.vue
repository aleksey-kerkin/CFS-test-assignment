<template>
  <div class="container mx-auto p-4">
    <div v-if="loading" class="py-4 text-center">Loading...</div>
    <div v-else-if="post">
      <h1 class="mb-4 text-2xl font-bold">{{ post.title }}</h1>
      <p class="mb-4 text-gray-700">{{ post.body }}</p>
      <router-link to="/" class="text-blue-500 hover:underline">
        Back to Home
      </router-link>
    </div>
    <div v-else class="py-4 text-center">
      <p>Post not found</p>
      <router-link to="/" class="text-blue-500 hover:underline">
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

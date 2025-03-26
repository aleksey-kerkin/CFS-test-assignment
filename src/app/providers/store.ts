import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Post } from "@/entities/post/model";
import { fetchPosts } from "@/shared/api/instance";

export const usePostStore = defineStore("post", () => {
  // State
  const posts = ref<Post[]>([]);
  const currentPage = ref(1);
  const searchQuery = ref("");
  const loading = ref(false);

  // Getters
  const filteredPosts = computed(() => {
    const query = searchQuery.value.trim().toLowerCase();
    if (!query) return posts.value;
    return posts.value.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.body.toLowerCase().includes(query),
    );
  });

  const totalPages = computed(() => Math.ceil(filteredPosts.value.length / 10));

  const paginatedPosts = computed(() => {
    const start = (currentPage.value - 1) * 10;
    const end = start + 10;
    return filteredPosts.value.slice(start, end);
  });

  // Actions
  const loadPosts = async () => {
    loading.value = true;
    try {
      posts.value = await fetchPosts();
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      loading.value = false;
    }
  };

  const setSearchQuery = (query: string) => {
    searchQuery.value = query;
    currentPage.value = 1; // Reset to first page on search
  };

  return {
    posts,
    currentPage,
    searchQuery,
    loading,
    filteredPosts,
    totalPages,
    paginatedPosts,
    loadPosts,
    setSearchQuery,
  };
});

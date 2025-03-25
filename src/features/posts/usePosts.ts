import { ref, computed, watch } from "vue";
import { getPosts } from "@/shared/api/posts";
import type { Post } from "@/entities/post/types";

export const usePosts = () => {
  const allPosts = ref<Post[]>([]);
  const searchQuery = ref("");
  const currentPage = ref(1);
  const postsPerPage = 10;

  // Initial fetch
  getPosts().then((posts) => {
    allPosts.value = posts;
  });

  // Computed filtered posts
  const filteredPosts = computed(() => {
    const query = searchQuery.value.toLowerCase();
    return allPosts.value.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.body.toLowerCase().includes(query),
    );
  });

  // Pagination logic
  const totalPages = computed(() =>
    Math.ceil(filteredPosts.value.length / postsPerPage),
  );

  const currentPosts = computed(() => {
    const start = (currentPage.value - 1) * postsPerPage;
    return filteredPosts.value.slice(start, start + postsPerPage);
  });

  // Reset page when search changes
  watch(searchQuery, () => {
    currentPage.value = 1;
  });

  return {
    searchQuery,
    currentPage,
    totalPages,
    currentPosts,
  };
};

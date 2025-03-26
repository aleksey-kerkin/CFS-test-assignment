<script setup lang="ts">
import { usePosts } from "@/features/posts/usePosts";
import PostList from "@/widgets/PostsList/index.vue";
import Pagination from "@/widgets/Pagination/index.vue";
import Search from "@/widgets/Search/index.vue";

const { searchQuery, currentPage, totalPages, currentPosts } = usePosts();
</script>

<template>
  <div>
    <h1 class="text-4xl">Posts List</h1>

    <div>
      <Search v-model="searchQuery" />
    </div>

    <PostList :posts="currentPosts" />

    <Pagination
      v-if="totalPages > 1"
      :current-page="currentPage"
      :total-pages="totalPages"
      @update:current-page="currentPage = $event"
    />
  </div>
</template>

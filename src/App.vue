<template>
  <div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  // Set the page title
  document.title = "Vue Posts App";

  // Update or create a meta description tag
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      "A Vue.js app with posts from JSONPlaceholder",
    );
  } else {
    const newMeta = document.createElement("meta");
    newMeta.name = "description";
    newMeta.content = "A Vue.js app with posts from JSONPlaceholder";
    document.head.appendChild(newMeta);
  }
});
</script>

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import PostPage from "@/pages/PostPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/post/:id", name: "post", component: PostPage, props: true },
  ],
});

export default router;

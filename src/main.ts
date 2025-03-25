import { createApp } from "vue";
import "./style.css";
import App from "@/app/App.vue";
import { router } from "@/shared/config/router.ts";

const app = createApp(App);
app.use(router);
app.mount("#app");

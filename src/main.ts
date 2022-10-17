import { createApp } from "vue";

import "normalize.css";
import "./assets/css/index.scss";

import App from "./App.vue";
import router from "./router";
import pinia from "./store";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(pinia);
app.use(router);

app.mount("#app");

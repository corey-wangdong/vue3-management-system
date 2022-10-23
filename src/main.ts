import { createApp } from "vue";
import "normalize.css";
import "./assets/css/index.scss";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import App from "./App.vue";
import router from "./router";
import stores from "./stores";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(stores);
app.use(router);
app.mount("#app");

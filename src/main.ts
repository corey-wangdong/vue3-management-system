import { createApp } from "vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "normalize.css";
import "./assets/css/index.scss";

import App from "./App.vue";
import router from "./router";
import pinia from "./store";

const app = createApp(App);

app.use(ElementPlus);
app.use(pinia);
app.use(router);

app.mount("#app");

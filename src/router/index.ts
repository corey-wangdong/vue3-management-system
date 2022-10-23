import useLoginStore from "@/stores/login/login";
import { createRouter, createWebHistory, type RouteLocationNormalized, type RouteRecordRaw } from "vue-router";
import type { RouterObj } from "./routerList";
import routerList from "./routerList";
const modules = import.meta.glob("../views/**/*.vue");

// 获取main 页面的配置路由
const getRoutes = (list: RouterObj[]): RouteRecordRaw[] => {
  return list.map(item => {
    const component = modules[`../views/${item.src}/index.vue`];
    return {
      path: item.path,
      component: component,
      children: item.children?.length ? getRoutes(item.children) : []
    };
  });
};
const mainRouteList = getRoutes(routerList);
const routes = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    component: () => import("../views/login/index.vue")
  },
  ...mainRouteList,
  {
    path: "/:pathMatch(.*)",
    component: () => import("../views/not-found/not-found.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 导航守卫
router.beforeEach((to: RouteLocationNormalized) => {
  // 只有登录成功(token), 才能真正进入到main页面
  const token = useLoginStore().token;
  if (to.path.startsWith("/main") && !token) {
    return "/login";
  }

  if (to.path === "/login" && token) {
    return "/main";
  }
});

export default router;

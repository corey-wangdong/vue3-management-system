import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/utils/constans";
import { createRouter, createWebHistory, type RouteLocationNormalized } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/login",
      component: () => import("../views/login/login.vue")
    },
    {
      path: "/main",
      component: () => import("../views/main/main.vue")
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("../views/not-found/not-found.vue")
    }
  ]
});

// 导航守卫
router.beforeEach((to: RouteLocationNormalized) => {
  // 只有登录成功(token), 才能真正进入到main页面
  const token = localCache.getCache(LOGIN_TOKEN);
  if (to.path.startsWith("/main") && !token) {
    return "/login";
  }
});

export default router;

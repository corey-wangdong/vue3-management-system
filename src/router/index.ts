import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/utils/constans";
import { firstRoute } from "@/utils/map-menu";
import { createRouter, createWebHistory, type RouteLocationNormalized } from "vue-router";

const routes = [
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
    component: () => import("../views/main/main.vue"),
    children: [
      {
        path: "shop",
        component: () => import("../views/shop-manage/index.vue"),
        children: [
          {
            path: "order",
            component: () => import("../views/shop-manage/order/index.vue")
          },
          {
            path: "refund",
            component: () => import("../views/shop-manage/refund/index.vue")
          },
          {
            path: "refund-goods",
            component: () => import("../views/shop-manage/refund-goods/index.vue")
          },
          {
            path: "refund-single",
            component: () => import("../views/shop-manage/refund-single/index.vue")
          }
        ]
      }
    ]
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("../views/not-found/not-found.vue")
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// 导航守卫
router.beforeEach((to: RouteLocationNormalized) => {
  // 只有登录成功(token), 才能真正进入到main页面
  const token = localCache.getCache(LOGIN_TOKEN);
  if (to.path.startsWith("/main") && !token) {
    return "/login";
  }

  if (to.path === "/login" && token) {
    return "/main";
  }
  console.log("firstRoute=====", firstRoute);
  if (to.path === "/main" && firstRoute) {
    console.log("firstRoute=====", firstRoute);

    return firstRoute.path;
  }
});

export default router;

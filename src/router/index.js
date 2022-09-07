import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/fetchData",
      name: "fetchData",
      component: () => import("../views/FetchDataView.vue"),
    },
    {
      path: "/dynamicList",
      name: "dynamicList",
      component: () => import("../views/DynamicListView.vue"),
    },
    {
      path: "/conditionalsandloops",
      name: "conditionalsandloops",
      component: () => import("../views/ConditionalsAndLoopsView.vue"),
    },
    {
      path: "/dynamicclasses",
      name: "dynamicclasses",
      component: () => import("../views/DynamicClassesView.vue"),
    },
    {
      path: "/conditionalrendering",
      name: "conditionalrendering",
      component: () => import("../views/ConditionalRenderingView.vue"),
    },
  ],
});

export default router;

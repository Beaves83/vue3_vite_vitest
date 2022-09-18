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
      path: "/conditionalsAndLoops",
      name: "conditionalsAndLoops",
      component: () => import("../views/ConditionalsAndLoopsView.vue"),
    },
    {
      path: "/dynamicClasses",
      name: "dynamicClasses",
      component: () => import("../views/DynamicClassesView.vue"),
    },
    {
      path: "/conditionalRendering",
      name: "conditionalRendering",
      component: () => import("../views/ConditionalRenderingView.vue"),
    },
  ],
});

export default router;

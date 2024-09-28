import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "map",
    component: () => import("../views/map.vue"),
  },
  {
    path: "/character",
    name: "character",
    component: () => import("../views/character.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

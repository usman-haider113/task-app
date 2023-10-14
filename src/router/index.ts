import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ProductMain from "../views/ProductMain.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: ProductMain,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/product/:id", 
    props: true,
    name: "productDetails",
    component: () =>
    import(/* webpackChunkName: "productDetails" */ "../components/ProductDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

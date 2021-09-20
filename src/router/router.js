import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import App from "../App.vue"
import AddData from "../components/AddData.vue";
import GetResult from "../components/GetResult.vue";


const routes = [
  {
    path: "/",
    name: "GetResult",
    component: GetResult,
  },
  {
    path: "/add",
    name: "AddData",
    component: AddData,
  },
];


const router =  createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
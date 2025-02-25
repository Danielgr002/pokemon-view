import { createRouter, createWebHistory } from 'vue-router'
import Generaciones from "@/Generaciones.vue";
import Pokemon from "@/Pokemon.vue";
import App from "@/Gimnasios.vue";
import Movimientos from "@/Movimientos.vue";
import Gimnasios from "@/Gimnasios.vue";

const routes = [
  { path: '/Generaciones', component: Generaciones },
  { path: '/Pokemon', component: Pokemon },
  { path: '/Gimnasios', component: Gimnasios },
  { path: '/Movimientos', component: Movimientos }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

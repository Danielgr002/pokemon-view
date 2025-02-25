import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//import App from './Gimnasios.vue'
//import App from './Generaciones.vue'
//import App from './Movimientos.vue'
import router from "./router";

createApp(App).use(router).mount('#app')


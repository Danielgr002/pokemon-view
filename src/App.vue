<script>
import Generaciones from "./Generaciones.vue";

export default {
  name: 'App',
  components: {Generaciones}
}
</script>

<template>
  <div>
    <nav>
      <router-link to="/Generaciones">Generaciones</router-link>
      <router-link to="/Gimnasios">Gimnasios</router-link>
      <router-link to="/Movimientos">Movimientos</router-link>
      <router-link to="/Pokemon">Pokemon</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<style scoped>

</style>

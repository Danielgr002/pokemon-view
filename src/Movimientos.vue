<script>
import axios from "axios";
export default {
  data() {
    return {
      nom_web: "Lista de Movimientos",
      movimientos: []
    }
  },
  mounted() {
    axios.get("http://localhost:8080/poke/movimientos").then(res => {
      let movimientos = res.data;
      console.log(movimientos);
      this.movimientos = movimientos;
    })
  }
}
</script>
<template>
  <h1>{{nom_web}}</h1>

  <table>
    <thead>
    <tr>
      <th>Nombre</th>
      <th>Tipo</th>
      <th>Precision</th>
      <th>Pokemons</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="movimiento in movimientos">
      <td>{{ movimiento.nombre }}</td>
      <td>{{ movimiento.tipo }}</td>
      <td>{{ movimiento.precision }}</td>
      <td>{{ movimiento.pokemons.map(s => s.pokemon)}}</td>
    </tr>
    </tbody>
  </table>
  <div>
    <router-link to="/Movimientos">Pagina Inicio</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>



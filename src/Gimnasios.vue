<script>
import axios from "axios";
export default {
  data() {
    return {
      nom_web: "Lista de Gimnasios",
      gimnasios: []
    }
  },
  mounted() {
    axios.get("http://localhost:8080/poke/gimnasios").then(res => {
      let gimnasios = res.data;
      console.log(gimnasios);
      this.gimnasios = gimnasios;
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
      <th>Lider</th>
      <th>Foto</th>
      <th>Tipos</th>
      <th>Pokemons</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="gimnasio in gimnasios">
      <td>{{ gimnasio.nombre }}</td>
      <td>{{ gimnasio.lider }}</td>
      <td>{{ gimnasio.foto_url }}</td>
      <td>{{ gimnasio.tipos }}</td>
      <td>{{ gimnasio.pokemons.map(s => s.pokemon)}}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>


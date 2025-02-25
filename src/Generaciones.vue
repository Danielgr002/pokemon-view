<script>
import axios from "axios";
export default {
  data() {
    return {
      nom_web: "Lista de Generaciones",
      generaciones: []
    }
  },
  mounted() {
    axios.get("http://localhost:8080/poke/generaciones").then(res => {
      let generaciones = res.data;
      console.log(generaciones);
      this.generaciones = generaciones;
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
      <th>Año de lanzamiento</th>
      <th>Localizacion</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="generacion in generaciones">
      <td>{{ generacion.nombre }}</td>
      <td>{{ generacion.anio_lanzamiento }}</td>
      <td>{{ generacion.localizacion }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>


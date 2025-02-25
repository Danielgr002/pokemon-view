<script>
import axios from "axios";
export default {
  data() {
    return {
      nom_web: "Lista de Pokemons",
      pokemons: []
    }
  },
  mounted() {
    axios.get("http://localhost:8080/poke/pokemons").then(res => {
      let pokemons = res.data;
      console.log(pokemons);
      this.pokemons = pokemons;
    })
  }
}
</script>
<template>
  <h1>{{nom_web}}</h1>

  <table>
    <thead>
      <tr>
        <th>Pokemon</th>
        <th>Nivel</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="pokemon in pokemons">
        <td>{{ pokemon.pokemon }}</td>
        <td>{{ pokemon.nivel }}</td>
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

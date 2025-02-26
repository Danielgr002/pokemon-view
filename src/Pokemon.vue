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

    //let idPokemon = 1;

    //axios.delete(`http://localhost:8080/poke/pokemons/${idPokemon}`).then(res => {
        //let pokemon = res.data;
        //console.log(pokemon);
        //this.pokemons = pokemon;
    //})

    //let nuevoPokemon = {
      //nombre: 'Pikachu',
      //nivel: 25
    //};

    //axios.post('http://localhost:8080/poke/pokemons', nuevoPokemon).then(res => {
        //let pokemonCreado = res.data;
        //console.log(pokemonCreado);
        //this.pokemons.push(pokemonCreado);
    //})
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

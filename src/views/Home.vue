<template>
  <div class="home">
    <div class="search">
      <div class="frame">
        <img alt="Vue logo" src="../assets/icon/M.png">
      </div>
      <div class="search-bar">
        <input type="text" placeholder="Ex: Spiderman, Avengers, Raiponse, Matrix, etc." v-model="titleSearch">
        <button @click="getMovieByName"><img src="../assets/icon/loupe.png" alt=""></button>
      </div>
    </div>
    <div class="movies">
      <MovieCard v-for="movie in movies" :key="movie" :movie="movie"/>
    </div>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue'
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      titleSearch: "",
      movies: [],
    }
  },
  methods: {
    getMovieByName() {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=cb0ef5c51ab85bb717a5878414741f99&query='+this.titleSearch)
        .then(res => {
          this.movies = res.data.results
        })
    }
  },
  components: {
    MovieCard,
  }
}
</script>


<style lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100vh;

    .search {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 0;

      .frame {
        height: 100px;
        width: 100px;
        background: #FFFFFF;
        border-radius: 50px;

        img {
          width: 100%;
        }
      }

      .search-bar {
        display: flex;
        align-items: center;
        margin-top: 30px;

        input {
          padding: 10px 20px;
          border-radius: 50px 0px 0px 50px;
          height: 20px;
          width: 300px;
        }

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px 15px;
          padding-left: 10px;
          border-left: 2px solid lightgrey;
          border-radius: 0px 50px 50px 0px;
          height: 20px;
          background: #FFFFFF;
          cursor: pointer;

          img {
            width: 20px;
          }
        }
      }
    }
    .movies {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 80%;
    }
  }
</style>
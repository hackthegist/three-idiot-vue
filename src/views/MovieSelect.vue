<template>
  <div class="movie-list">
    <v-container>
      <MovieCardRow v-for="movies of movies3" :key="movies.id" :movies="movies.movie" />
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import MovieCardRow from "@/components/MovieCardRow";

export default {
  name: "MovieList",
  components: {
    MovieCardRow
  },
  data() {
    return {
      movies3: []
    };
  },
  methods: {
    getMovies() {
      const token = this.$session.get("jwt");
      const options = {
        headers: { Authorization: `JWT ${token}` }
      };
      axios
        .get("http://localhost:8000/api/v1/movies/research/", options)
        .then(res => {
          const movies3 = [];
          const movies = res.data;
          for (let i = 0; i < 3; i += 3) {
            const movie = {};
            movie.id = i;
            movie.movie = movies.slice(i, i + 3);
            movies3.push(movie);
          }
          this.movies3 = movies3;
        });
    }
  },
  mounted() {
    this.getMovies();
  }
};
</script>

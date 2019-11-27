<template>
  <v-app id="admin-movie-list">
    <AdminMovies :movies="movies" />
  </v-app>
</template>

<script>
import axios from "axios";
// import router from "@/router";
// import JwtDecode from "jwt-decode";
import AdminMovies from "@/components/AdminMovies";

export default {
  name: "admin-movie-list",
  components: {
    AdminMovies
  },
  data() {
    return {
      dialog: false,
      movies: []
    };
  },
  methods: {
    getMovies() {
      const token = this.$session.get("jwt");
      const options = {
        headers: { Authorization: `JWT ${token}` }
      };
      axios
        .get("http://localhost:8000/api/v1/movies/", options)
        .then(res => (this.movies = res.data))
        .then(res => console.log(res));
    }
  },
  mounted() {
    this.getMovies();
  }
};
</script>

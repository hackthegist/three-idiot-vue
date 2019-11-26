<template>
  <v-app id="admin-movie-list">
    <AdminMovies :movies="movies" />
  </v-app>
</template>

<script>
import axios from "axios";
import router from "@/router";
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
      axios
        .get("http://localhost:8000/3idiots/v1/movies/")
        .then(res => console.log(res));
    },
    loggedIn() {
      this.$session.start();

      if (!this.$session.has("jwt")) {
        router.push("/login");
      }
    }
  },
  mounted() {
    this.loggedIn();
    this.getMovies();
  }
};
</script>

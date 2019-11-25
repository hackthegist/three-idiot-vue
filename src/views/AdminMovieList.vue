<template>
  <v-app id="admin-movie-list"><AdminMovies :movies="movies" /> </v-app>
</template>

<script>
import AdminMovies from "@/components/AdminMovies";

export default {
  name: "admin-movie-list",
  components: {
    AdminMovies
  },
  data() {
    return {
      movies: [
        {
          title: "겨울 왕국 2",
          rating: 5
        },
        {
          title: "블랙 머니",
          rating: 4.5
        }
      ]
    };
  }
};
</script>

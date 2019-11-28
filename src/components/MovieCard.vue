<template>
  <v-card class="mx-auto" background-color="black" max-width="13vw">
    <v-img :src="movie.image" :alt="movie.title" width="13vw"></v-img>

    <v-card-title>{{ movie.title }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "MovieCard",
  data() {
    return {
      im:
        "https://movie-phinf.pstatic.net/20190916_49/1568614827948hyiXA_JPEG/movie_image.jpg?type=m203_290_2"
    };
  },
  props: {
    movie: Object
  }
};
</script>

<style>
</style>

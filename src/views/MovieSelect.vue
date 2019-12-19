<template>
  <div class="movie-list">
    <v-container>
      <div style="height: 100px;"></div>
      <MovieCardRow
        v-for="movies in movies3"
        :key="movies.id"
        :movies="movies.movie"
        @selected="appendSelected"
      />
      <v-row class="my-10" align="center" justify="center">
        <v-btn @click="selectedAll" x-large>취향 분석 시작</v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'
import router from '@/router'
import MovieCardRow from '@/components/MovieCardRow'

export default {
  name: 'MovieList',
  components: {
    MovieCardRow
  },
  data() {
    return {
      movies3: [],
      selectedMovies: []
    }
  },
  methods: {
    appendSelected(movie) {
      console.log(movie)
      this.selectedMovies.push(movie)
      console.log(this.selectedMovies)
    },
    selectedAll() {
      this.$session.set('selected', this.selectedMovies)
      router.push('/movie-list').catch(err => {})
      // this.$emit('selected', this.selectedMovies)
    },
    ...mapActions('movies', ['getMoviesToSelect'])
  },
  mounted() {
    this.$emit('loggedIn')
    this.getMovies()
  }
}
</script>

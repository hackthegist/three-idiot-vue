<template>
  <v-app id="admin-movie-list">
    <AdminMovies :movies="movies" @updated="getMovies" />
  </v-app>
</template>

<script>
import AdminMovies from '@/components/AdminMovies'

export default {
  name: 'admin-movie-list',
  components: {
    AdminMovies
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    getMovies() {
      this.$emit('loggedIn')
      const token = this.$session.get('jwt')
      const options = {
        headers: { Authorization: `JWT ${token}` }
      }
      axios
        .get('http://localhost:8000/api/v1/movies/', options)
        .then(res => (this.movies = res.data))
    }
  },
  mounted() {
    this.$store.dispatch('user/requireAuth')
  }
}
</script>

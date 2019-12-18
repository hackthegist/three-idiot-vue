import MovieService from '@/services/MovieService'

export const namespaced = true

export const state = {
  movies: []
}

export const mutations = {
  SET_MOVIES(state, movies) {
    state.movies = movies
  },
  DELETE_MOVIE(state, movieId) {
    state.movies = state.movies.filter(movie => movie.id !== movieId)
  }
}

export const actions = {
  getMovies({ commit }) {
    MovieService.fetchMovies()
      .then(res => {
        commit('SET_MOVIES', res.data)
      })
      .catch(() => {
        alert('영화 정보를 가져오는데 실패했습니다.')
      })
  },

deleteMovieFromList({ commit }, userId) {
    UserService.deleteUser(userId)
      .then(() => {
        commit('DELETE_USER', userId)
      })
      .catch(() => {
        alert('유저 삭제 중 오류가 발생했습니다')
      })
    // dispatch('getUserList')
  },

export const getters = {}

import MovieService from '@/services/MovieService'

export const namespaced = true

export const state = {
  movies: []
}

export const mutations = {
  SET_MOVIES(state, movies) {
    state.movies = movies
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
  }
}

export const getters = {}

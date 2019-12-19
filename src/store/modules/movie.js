import MovieService from '@/services/MovieService'

export const namespaced = true

export const state = {
  movies: [],
  moviesToSelect: []
}

export const mutations = {
  SET_MOVIES(state, movies) {
    state.movies = movies
  },
  DELETE_MOVIE(state, movieId) {
    state.movies = state.movies.filter(movie => movie.id !== movieId)
  },
  SET_MOVIES_TO_SELECT(state, moviesToSelect) {
    state.moviesToSelect = moviesToSelect
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

  deleteMovieFromList({ commit }, movieId) {
    MovieService.deleteMovie(movieId)
      .then(() => {
        commit('DELETE_MOVIE', movieId)
      })
      .catch(() => {
        alert('영화 삭제 중 오류가 발생했습니다')
      })
    // dispatch('getUserList')
  },
  getMoviesToSelect({ commit }) {
    MovieService.fetchMoviesToSelect()
      .then(res => {
        commit('SET_MOVIES_TO_SELECT', res.data)
      })
      .catch(() => {
        alert('선택할 영화 정보를 가져오는데 실패했습니다.')
      })
  }
}

export const getters = {}

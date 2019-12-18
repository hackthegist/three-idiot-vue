import axios from 'axios'
import * as user from '@/store/modules/user.js'

const apiClient = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: false
})

const setOptions = () => {
  const token = user.state.token
  return {
    headers: { Authorization: `JWT ${token}` }
  }
}

export default {
  fetchMovies() {
    return apiClient.get('/api/v1/movies/', setOptions())
  }
}

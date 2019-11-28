<template>
  <div class="container">
    <v-simple-table id="admin-list">
      <thead>
        <tr>
          <th class="text-left">제목</th>
          <th class="text-left">평점</th>
          <th class="text-left">
            <MovieCreateFormModal />
          </th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in movies" :key="movie.title">
          <td width="40%">{{ movie.title }}</td>
          <td width="40%">{{ movie.score }}</td>
          <td>
            <MovieUpdateFormModal :movieId="movie.id" />
            <!-- <v-btn text outlined color="success">수정</v-btn> -->
          </td>
          <td>
            <v-btn text outlined :value-id="movie.id" color="error" @click="deleteMovie">삭제</v-btn>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

import MovieCreateFormModal from "@/components/MovieCreateFormModal";
import MovieUpdateFormModal from "@/components/MovieUpdateFormModal";
export default {
  name: "admin-movies",
  components: {
    MovieCreateFormModal,
    MovieUpdateFormModal
  },
  props: {
    movies: Array
  },
  methods: {
    deleteMovie(e) {
      const movieId = e.target.parentNode.getAttribute("value-id");
      const token = this.$session.get("jwt");
      const options = {
        headers: { Authorization: `JWT ${token}` }
      };
      axios
        .post(
          `http://localhost:8000/api/v1/movies/${movieId}/delete/`,
          {},
          options
        )
        .then(res => {
          router.push(`/admin-movie-list?${movieId}`).catch(err => {});
        });
    }
  }
};
</script>

<style></style>

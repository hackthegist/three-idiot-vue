<template>
  <div class="container">
    <v-simple-table id="admin-list">
      <thead>
        <tr>
          <th class="text-left">제목</th>
          <th class="text-left">평점</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in movies" :key="movie.title">
          <td width="40%">{{ movie.title }}</td>
          <td width="40%">{{ movie.rating }}</td>
          <td>
            <v-btn text color="success">수정</v-btn>
          </td>
          <td><v-btn text color="error">삭제</v-btn></td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "admin-movies",
  props: {
    movies: []
  }
};
</script>

<style></style>

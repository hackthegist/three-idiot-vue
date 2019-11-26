<template>
  <v-app-bar app clipped-left color="transparent" dense>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-icon class="mx-4">fab fa-youtube</v-icon>
    <v-toolbar-title class="mr-12 align-center">
      <span class="title">3 Idiots</span>
    </v-toolbar-title>
    <v-spacer />
    <div>
      <v-btn text color="white" to="/admin-movie-list">영화 관리</v-btn>
      <v-btn text color="white" to="/admin-user-list">유저 관리</v-btn>
    </div>
    <v-btn text color="white" to="/movie-list">내 취향 분석</v-btn>
    <v-btn text color="white" to="/movie-list">추천 영화 보기</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style></style>

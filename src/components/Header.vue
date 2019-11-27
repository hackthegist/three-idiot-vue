<template>
  <header>
    <v-app-bar app clipped-right color="transparent" dense>
      <v-toolbar-title class="align-center">
        <v-btn to="/" color="dark">
          <v-icon class="mx-4">mdi-movie</v-icon>
          <span class="title">세 얼간이</span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <div v-show="isStaff">
        <v-btn text color="white" to="/admin-movie-list">영화 관리</v-btn>
        <v-btn text color="white" to="/admin-user-list">유저 관리</v-btn>
      </div>
      <v-btn text color="white" to="/login" v-if="!isLogin">로그인</v-btn>
      <v-btn text color="white" @click="logout" v-if="isLogin">로그아웃</v-btn>
      <v-btn text color="white" to="/movie-list">내 취향 분석</v-btn>
      <v-btn text color="white" to="/movie-list">추천 영화 보기</v-btn>
      <v-btn @click="toggleDrawer">
        <i class="fas fa-user"></i>
      </v-btn>
    </v-app-bar>
  </header>
</template>

<script>
import router from "@/router";

export default {
  name: "Header",
  data() {
    return {
      show: "hidden"
    };
  },
  props: {
    isStaff: Boolean,
    isLogin: Boolean
  },
  methods: {
    toggleDrawer() {
      this.$emit("toggleDrawer");
    },
    logout() {
      this.$session.remove("jwt");
      this.$emit("logout");
      router.push("/login");
    }
  }
};
</script>

<style></style>

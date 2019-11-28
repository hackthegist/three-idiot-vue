<template>
  <v-app id="app">
    <Header
      @toggleDrawer="toggleDrawer"
      @logout="setUserData"
      :isStaff="is_staff"
      :isLogin="isLogin"
    />
    <UserDrawer :drawer="drawer" :username="username" />
    <v-content>
      <router-view :key="$route.fullPath" @loggedIn="setUserData" />
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import UserDrawer from "@/components/UserDrawer";

export default {
  name: "App",

  components: {
    Header,
    UserDrawer
  },

  data() {
    return {
      drawer: false,
      username: "",
      isLogin: false,
      is_staff: false
    };
  },

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    setUserData() {
      this.$session.start();
      this.isLogin = this.$session.get("isLogin") || false;
      this.is_staff = this.$session.get("is_staff") || false;
      this.username = this.$session.get("username") || "";
    }
  },

  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<template>
  <v-app id="app">
    <Header @toggleDrawer="toggleDrawer" :isStaff="user.isStaff" :isLogin="isLogin" />
    <UserDrawer :drawer="drawer" />
    <v-content>
      <router-view @login="login" />
    </v-content>
  </v-app>
</template>

<script>
import router from "@/router";
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
      drawer: true,
      user: {},
      isLogin: false
    };
  },

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    loggedIn() {
      this.$session.start();
      if (!this.$session.has("jwt")) {
        this.isLogin = false;
        router.push("/login");
      }
    },
    login() {
      this.user = { isStaff: false };
      this.isLogin = true;
    }
  },

  created() {
    this.$vuetify.theme.dark = true;
  },
  mounted() {
    this.loggedIn();
  }
};
</script>

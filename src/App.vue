<template>
  <v-app id="app">
    <Header />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    Header
  },

  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

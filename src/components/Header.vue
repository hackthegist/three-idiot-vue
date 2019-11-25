<template>
  <v-app-bar app clipped-left color="transparent" dense>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-icon class="mx-4">fab fa-youtube</v-icon>
    <v-toolbar-title class="mr-12 align-center">
      <span class="title">3 Idiots</span>
    </v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  name: "header"
};
</script>

<style></style>

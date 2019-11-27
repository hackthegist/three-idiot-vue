<template>
  <div class="home"></div>
</template>

<script>
import router from "@/router";

export default {
  name: "home",
  components: {
    // Header
  },
  data() {
    return {};
  },
  methods: {
    loggedIn() {
      this.$session.start();

      if (!this.$session.has("jwt")) {
        router.push("/login");
      } else {
        this.$emit("loggedIn");
      }
    }
  },

  mounted() {
    this.loggedIn();
  }
};
</script>

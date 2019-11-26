<template>
  <div class="home">
    <Header />
  </div>
</template>

<script>
import Header from "@/components/Header";
import router from "@/router";

export default {
  name: "home",
  components: {
    Header
  },
  methods: {
    loggedIn() {
      this.$session.start();

      if (!this.$session.has("jwt")) {
        router.push("/login");
      }
    }
  },

  mounted() {
    this.loggedIn();
  }
};
</script>

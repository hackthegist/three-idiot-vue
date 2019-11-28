<template>
    <v-row class="home" justify="center" align="center">
        <div class="mx-auto my-auto">
            <h1>지금 바로 취향 분석에 도전하세요 -></h1>
        </div>
    </v-row>
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
                router.push("/").catch(err => {});
            }
        }
    },

    mounted() {
        this.loggedIn();
    }
};
</script>

<template>
  <v-navigation-drawer :value="drawer" app absolute clipped relative right>
    <v-list dense>
      <v-subheader class="mt-4 grey--text text--darken-1">USER</v-subheader>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img
              src="https://post-phinf.pstatic.net/MjAxNzA2MjhfMjM4/MDAxNDk4NjU2MzgyNzkz.483tLYhwuZWJkjlaoylJOmugikPrngLkrdD11Rw0m-Ag.9EuU6nAsgO_P8f1ZvfOlD3-5yazjQ5bEOeO55leuV20g.PNG/10.PNG?type=w1200"
              alt
            />
          </v-list-item-avatar>
          <v-list-item-title class="font-weight-bold" v-text="username" />
        </v-list-item>
      </v-list>
      <v-subheader class="mt-4 grey--text text--darken-1"
        >RECENTLY WATCHED</v-subheader
      >
      <v-list-item v-for="item in items" :key="item.text" link>
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item class="mt-4" link>
        <v-list-item-action>
          <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
        </v-list-item-action>
        <v-list-item-title class="grey--text text--darken-1"
          >Browse Channels</v-list-item-title
        >
      </v-list-item>
      <v-list-item link>
        <v-list-item-action>
          <v-icon color="grey darken-1">mdi-settings</v-icon>
        </v-list-item-action>
        <v-list-item-title class="grey--text text--darken-1"
          >Manage Subscriptions</v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "UserDrawer",
  data() {
    return {
      items: [
        { icon: "mdi-trending_up", text: "겨울 왕국 2" },
        { icon: "subscriptions", text: "블랙 머니" },
        { icon: "history", text: "82년생 김지영" }
      ],
      items2: [{ picture: 28, text: "Joseph" }]
    };
  },
  props: {
    drawer: Boolean,
    username: String
  }
};
</script>

<style></style>

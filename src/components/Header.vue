<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list>
        <v-list-item v-for="item in items2" :key="item.text" link>
          <v-list-item-avatar>
            <img
              :src="
                `https://randomuser.me/api/portraits/men/${item.picture}.jpg`
              "
              alt=""
            />
          </v-list-item-avatar>
          <v-list-item-title v-text="item.text" />
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.text" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1"
          >SUBSCRIPTIONS</v-subheader
        >

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
    <v-app-bar app clipped-left color="transparent" dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-icon class="mx-4" color="ㅠㅣㅁ차">mdi-movie</v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">세 얼간이</span>
      </v-toolbar-title>
      <v-spacer />
      <div>
        <v-btn text color="white" to="/admin-movie-list">영화 관리</v-btn>
        <v-btn text color="white" to="/admin-user-list">유저 관리</v-btn>
      </div>
      <v-btn text color="white" to="/login">로그인</v-btn>
      <v-btn text color="white" to="/movie-list">내 취향 분석</v-btn>
      <v-btn text color="white" to="/movie-list">추천 영화 보기</v-btn>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: null,
      items: [
        { icon: "mdi-trending_up", text: "겨울 왕국 2" },
        { icon: "subscriptions", text: "블랙 머니" },
        { icon: "history", text: "82년생 김지영" }
      ],
      items2: [{ picture: 28, text: "Joseph" }]
    };
  }
};
</script>

<style></style>

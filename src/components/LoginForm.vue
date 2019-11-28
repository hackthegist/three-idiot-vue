<template>
  <v-card class="elevation-12 pa-10" color="black" width="25rem">
    <v-toolbar color="black" dark flat>
      <v-toolbar-title class="font-weight-bold">로그인</v-toolbar-title>
      <v-spacer />
    </v-toolbar>

    <v-divider color="red"></v-divider>
    <v-card-text>
      <v-form color="white">
        <v-text-field
          id="username"
          label="사용자 이름"
          name="username"
          type="text"
          color="white"
          dark
          clearable
          :rules="[rules.required]"
          v-model="credentials.username"
        />

        <v-text-field
          id="password"
          label="비밀번호"
          name="password"
          type="password"
          color="white"
          dark
          clearable
          :rules="[rules.required]"
          v-model="credentials.password"
          @keyup.enter="login"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        color="red black--text"
        light
        class="font-weight-bold"
        @click="login"
        >로그인</v-btn
      >
    </v-card-actions>
    <v-btn to="/signup" text color="white">혹시 아직 회원이 아니신가요?</v-btn>
  </v-card>
</template>

<script>
import axios from "axios";
import router from "@/router";
import JwtDecode from "jwt-decode";

export default {
  name: "login-form",
  data() {
    return {
      credentials: {},
      rules: {
        required: value => !!value || "필수 입력 사항입니다.",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "이메일 주소를 입력해주세요";
        }
      }
    };
  },
  methods: {
    login() {
      if (!this.credentials.username) {
        alert("사용자 이름을 입력해주세요");
      } else if (!this.credentials.password) {
        alert("비밀번호를 입력해주세요");
      } else {
        axios
          .post("http://localhost:8000/api-token-auth/", this.credentials)
          .then(res => {
            console.log(res.data.token);
            this.$session.start();
            this.$session.set("jwt", res.data.token);

            const token = res.data.token;
            const userId = JwtDecode(token).user_id;
            const options = {
              headers: { Authorization: `JWT ${token}` }
            };
            axios
              .get(`http://localhost:8000/api/v1/accounts/${userId}/`, options)
              .then(res => {
                this.$session.set("username", res.data.username);
                this.$session.set("is_staff", res.data.is_staff);
                this.$session.set("isLogin", true);
                router.push("/").catch(err => {});
              });
          })
          .catch(err => {
            console.log(err);
            alert("사용자 이름과 패스워드를 다시 한번 확인해주세요");
          });
      }
    }
  }
};
</script>

<style></style>

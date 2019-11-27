<template>
  <v-card class="elevation-12 pa-10" color="black" width="25rem">
    <v-toolbar color="black" dark flat>
      <v-toolbar-title class="font-weight-bold">회원가입</v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-divider color="red"></v-divider>
    <v-card-text>
      <v-form color="white">
        <v-text-field
          id="suername"
          label="이름"
          name="username"
          type="text"
          color="white"
          dark
          clearable
          :rules="[rules.required]"
          v-model="credentials.username"
        />
        <v-text-field
          id="email"
          label="이메일 주소"
          name="login"
          type="text"
          color="white"
          dark
          clearable
          :rules="[rules.required, rules.email]"
          v-model="credentials.email"
        />

        <v-text-field
          id="password1"
          label="비밀번호"
          name="password1"
          type="password"
          color="white"
          dark
          clearable
          :rules="[rules.required]"
          v-model="credentials.password1"
        />
        <v-text-field
          id="password2"
          label="비밀번호 확인"
          name="password2"
          type="password"
          color="white"
          dark
          clearable
          :rules="[rules.required]"
          v-model="credentials.password2"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="red black--text" light class="font-weight-bold" @click="signup">가입</v-btn>
    </v-card-actions>
    <v-btn to="/login" text color="white" class="text-center">지금 로그인하기</v-btn>
  </v-card>
</template>

<script>
import axios from "axios";
import router from "@/router";
export default {
  name: "signup-form",
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
    signup() {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!this.credentials.email) {
        alert("이메일 주소를 입력해주세요");
      } else if (!this.credentials.password1) {
        alert("비밀번호를 입력해주세요");
      } else if (!this.credentials.password2) {
        alert("비밀번호 확인을 입력해주세요");
      } else if (!this.credentials.username) {
        alert("사용자 이름를 입력해주세요");
      } else if (!pattern.test(this.credentials.email)) {
        alert("올바른 이메일 주소를 입력해주세요");
      } else if (this.credentials.password1 !== this.credentials.password2) {
        alert("비밀번호가 서로 다릅니다.");
      } else {
        console.log(this.credentials);
        axios
          .post(
            "http://localhost:8000/api/v1/accounts/signup/",
            this.credentials
          )
          .then(res => {
            console.log(res.data);
            router.push("/");
          });
      }
    }
  }
};
</script>

<style></style>

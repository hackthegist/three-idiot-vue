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
          id="password"
          label="비밀번호"
          name="password"
          type="password"
          color="white"
          dark
          clearable
          :rules="[rules.required]"
          v-model="credentials.password"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        color="red black--text"
        light
        class="font-weight-bold"
        @click="signup"
        >가입</v-btn
      >
    </v-card-actions>
    <v-btn to="/login" text color="white" class="text-center"
      >지금 로그인하기</v-btn
    >
  </v-card>
</template>

<script>
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
      } else if (!this.credentials.password) {
        alert("비밀번호를 입력해주세요");
      } else if (!this.credentials.username) {
        alert("사용자 이름를 입력해주세요");
      } else if (!pattern.test(this.credentials.email)) {
        alert("올바른 이메일 주소를 입력해주세요");
      } else {
        console.log(this.credentials);
      }
    }
  }
};
</script>

<style></style>

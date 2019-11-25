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
        />
        <v-text-field
          id="email"
          label="이메일 주소"
          name="login"
          type="text"
          color="white"
          dark
        />

        <v-text-field
          id="password"
          label="비밀번호"
          name="password"
          type="password"
          color="white"
          dark
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="red black--text" light class="font-weight-bold">가입</v-btn>
    </v-card-actions>
    <v-btn to="/login" text color="white" class="text-center"
      >지금 로그인하기</v-btn
    >
  </v-card>
</template>

<script>
export default {
  name: "signup-form"
};
</script>

<style></style>

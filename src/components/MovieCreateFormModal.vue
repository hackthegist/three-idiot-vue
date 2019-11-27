<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn text outlined color="primary" dark v-on="on">
          등록
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline black d-flex justify-space-between"
          primary-title
        >
          새 영화
          <v-btn color="black" @click="dialog = false">
            <v-icon color="white">mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-form color="white">
            <v-text-field
              id="email"
              label="이메일 주소"
              name="login"
              type="email"
              color="white"
              dark
              clearable
              :rules="[rules.required]"
              v-model="movie.email"
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
              v-model="movie.password"
            />
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text outlined @click="dialog = false">
            등록
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "MovieCreateFormModal",
  data() {
    return {
      dialog: false,
      movie: {},
      rules: {
        required: value => !!value || "필수 입력 사항입니다."
      }
    };
  }
};
</script>

<style></style>

<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn text outlined color="primary" dark v-on="on">등록</v-btn>
      </template>

      <v-card>
        <v-card-title class="headline black d-flex justify-space-between" primary-title>
          새 영화
          <v-btn color="black" @click="dialog = false">
            <v-icon color="white">mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-form color="white">
            <v-text-field
              id="title"
              label="영화 제목"
              name="title"
              type="text"
              color="white"
              dark
              clearable
              :rules="[rules.required]"
              v-model="movie.title"
            />

            <v-textarea
              id="summary"
              label="줄거리"
              name="summary"
              type="text"
              color="white"
              dark
              clearable
              :rules="[rules.required]"
              v-model="movie.summary"
            />
            <v-text-field
              id="director"
              label="감독 이름"
              name="director"
              type="text"
              color="white"
              dark
              clearable
              :rules="[rules.required]"
              v-model="movie.director"
            />
            <v-row align="center">
              <v-col class="d-flex" v-model="movie.genre" cols="12" sm="6">
                <v-select :items="genres" label="장르"></v-select>
              </v-col>
            </v-row>
            <v-text-field
              id="prdtYear"
              label="제작연도"
              name="prdtYear"
              type="number"
              color="white"
              min="1900"
              max="2019"
              dark
              clearable
              :rules="[rules.required]"
              v-model="movie.prdtYear"
            />
            <v-text-field
              id="showTm"
              label="러님타임(분)"
              name="showTm"
              type="number"
              color="white"
              dark
              clearable
              :rules="[rules.required]"
              v-model="movie.showTm"
            />
            <v-text-field
              id="nationNm"
              label="제작국가"
              name="nationNm"
              type="text"
              color="white"
              dark
              clearable
              :rules="[rules.required]"
              v-model="movie.nationNm"
            />
            <v-text-field
              id="actors"
              label="배우명"
              name="actors"
              type="text"
              color="white"
              hint="빈 칸을 뛰우고 입력해주세요 예시) 권상우 우도환"
              dark
              clearable
              :rules="[rules.required]"
              v-model="movie.actors"
            />
            <v-text-field
              id="watchGradeNm"
              label="관람등급"
              name="watchGradeNm"
              type="text"
              color="white"
              dark
              clearable
              :rules="[rules.required]"
              v-model="movie.watchGradeNm"
            />
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text outlined @click="dialog = false">등록</v-btn>
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
      genres: ["코미디", "액션"],
      rules: {
        required: value => !!value || "필수 입력 사항입니다."
      }
    };
  }
};
</script>

<style></style>

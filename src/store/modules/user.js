import axios from "axios";
import router from "@/router";
import JwtDecode from "jwt-decode";

export const namespaced = true;

export const state = {
  user: {},
  requiredRule: value => !!value || "필수 입력 사항입니다.",
  emailRule: value => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "이메일 주소를 입력해주세요";
  }
};

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  DELETE_USER(state) {
    state.user = {};
  }
};

export const actions = {
  signup({ dispatch }, credentials) {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!credentials.email) {
      alert("이메일 주소를 입력해주세요");
    } else if (!credentials.password1) {
      alert("비밀번호를 입력해주세요");
    } else if (!credentials.password2) {
      alert("비밀번호 확인을 입력해주세요");
    } else if (!credentials.username) {
      alert("사용자 이름를 입력해주세요");
    } else if (!pattern.test(credentials.email)) {
      alert("올바른 이메일 주소를 입력해주세요");
    } else if (credentials.password1 !== credentials.password2) {
      alert("비밀번호가 서로 다릅니다.");
    } else {
      axios
        .post("http://localhost:8000/api/v1/accounts/signup/", credentials)
        .then(res => {
          //   this.$session.start();
          //   this.$session.set("jwt", res.data.token);
          const user = {};
          user.token = res.data.token;
          user.userId = JwtDecode(user.token).user_id;
          dispatch("login", credentials);
          //   const options = {
          //     headers: { Authorization: `JWT ${token}` }
          //   };
          //   axios
          //     .get(`http://localhost:8000/api/v1/accounts/${userId}/`, options)
          //     .then(res => {
          //       this.$session.set("username", res.data.username);
          //       this.$session.set("is_staff", res.data.is_staff);
          //       this.$session.set("isLogin", true);
          //       router.push("/").catch(err => {});
          //     });
        });
    }
  },
  login({ commit }, credentials) {
    if (!credentials.username) {
      alert("사용자 이름을 입력해주세요");
    } else if (!credentials.password) {
      alert("비밀번호를 입력해주세요");
    } else {
      axios
        .post("http://localhost:8000/api-token-auth/", credentials)
        .then(res => {
          console.log(res.data.token);
          //   this.$session.start();
          //   this.$session.set("jwt", res.data.token);

          const token = res.data.token;
          const userId = JwtDecode(token).user_id;
          const options = {
            headers: { Authorization: `JWT ${token}` }
          };
          axios
            .get(`http://localhost:8000/api/v1/accounts/${userId}/`, options)
            .then(res => {
              commit("SET_USER", res.data);
              //   this.$session.set("username", res.data.username);
              //   this.$session.set("is_staff", res.data.is_staff);
              //   this.$session.set("isLogin", true);
              router.push("/").catch(() => {});
            });
        })
        .catch(err => {
          console.log(err);
          alert("사용자 이름과 패스워드를 다시 한번 확인해주세요");
        });
    }
  }
};

export const getters = {};

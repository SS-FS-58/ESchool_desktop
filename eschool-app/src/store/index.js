import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allUsers: [
      { id: 1, name: "hoza", email: "hoza@gmail.com", password: "123456" },
      { id: 2, name: "test", email: "test@gmail.com", password: "123456" },
    ],
    userInfo: null,
    isLogin: false,
    isLoginError: false,
  },
  mutations: {
    //Login success,
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    //Login Error,
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
      alert("Try again login!");
    },
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    },
  },
  actions: {
    //Retry Login
    login({ commit }, loginObj) {
      console.log(loginObj);

      axios
        .post("https://reqres.in/api/login", loginObj)
        .then((res) => {
          console.log(res);
          let token = res.data.token;
          let config = {
            "access-token": token,
          };
          localStorage.setItem("access_token", token);
          axios
            .get("https://reqres.in/api/users/2", config)
            .then((response) => {
              let userInfo = {
                id: response.data.data.id,
                first_name: response.data.data.first_name,
                last_name: response.data.data.last_name,
                avatar: response.data.data.avatar,
              };
              commit("longin", userInfo);
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
              console.log(config);
              commit("loginError");
            });
          console.log(res);
          res.status === "200";
        })
        .catch((err) => {
          console.log(err);
        });
      // let selectedUser = null;
      // state.allUsers.forEach((user) => {
      //   if (user.email === signObj.email) selectedUser = user;
      // });
      // selectedUser === null
      //   ? commit("loginError")
      //   : selectedUser.password !== signObj.password
      //   ? commit("loginError")
      //   : commit("loginSuccess");
    },
  },
  modules: {},
});

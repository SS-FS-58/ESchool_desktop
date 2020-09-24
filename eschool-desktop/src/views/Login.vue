<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-alert :value="isLoginError" type="error">
              Confirm ID and password!
            </v-alert>
            <v-alert :value="isLogin" type="success">
              Login successful!
            </v-alert>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on">
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  large
                  depressed
                  color="primary"
                  @click="
                    login({
                      email,
                      password,
                    })
                  "
                  >Login</v-btn
                >
                <v-spacer></v-spacer>
                <!-- <v-btn @click="test">test</v-btn>
                <v-btn @click="postTest">postTest</v-btn> -->
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"]),
  },
  methods: {
    ...mapActions(["login"]),

    // test() {
    //   axios
    //     .get("https://reqres.in/api/users?page=2")
    //     .then(function(response) {
    //       // handle success
    //       console.log(response);
    //     })
    //     .catch(function(error) {
    //       // handle error
    //       console.log(error);
    //     })
    //     .then(function() {
    //       console.log("test");
    //       // always executed
    //     });
    // },
    // postTest() {
    //   axios
    //     .post("https://reqres.in/api/login", {
    //       email: "eve.holt@reqres.in",
    //       password: "cityslicka",
    //     })
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
  },
};
</script>

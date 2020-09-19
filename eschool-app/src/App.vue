<template>
  <v-app>
    <v-main>
      <LoginView />
    </v-main>
  </v-app>
</template>

<script>
import LoginView from "./components/LoginView";

export default {
  name: "App",

  components: {
    LoginView,
  },

  data: () => ({
    //
  }),
};
</script>

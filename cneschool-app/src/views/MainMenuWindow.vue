<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <MainMenu msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import MainMenu from "@/components/MainMenu.vue";

export default {
  name: "MainMenu",
  components: {
    MainMenu,
  },
};
</script>

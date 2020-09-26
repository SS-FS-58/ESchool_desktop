<template>
  <div id="app">
    <MainMenu msg="test" />
  </div>
</template>
<script>
// @ is an alias to /src
import MainMenu from "@/components/MainMenu.vue";

export default {
  name: "App",
  components: {
    MainMenu,
  },
};
</script>
<style>
html {
  overflow: auto !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>

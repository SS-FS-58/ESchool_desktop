<template>
  <v-app id="mainMenuTemplate">
    <v-container class="p-0 fill-height" fluid style="-webkit-app-region: drag">
      <v-col cols="4" class="p-0">
        <v-btn icon color="pink" style="-webkit-app-region: no-drag;">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <p>test</p>
      </v-col>
      <v-col cols="4" class="p-0">
        <v-btn icon color="pink" style="-webkit-app-region: no-drag;">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <p>test</p>
      </v-col>
      <v-col cols="4" class="p-0">
        <v-btn icon color="pink" style="-webkit-app-region: no-drag;">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <p>test</p>
      </v-col>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: "MainMenu",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
.p-0 {
  padding: 0;
}
</style>

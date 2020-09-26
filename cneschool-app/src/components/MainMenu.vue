<template>
  <v-app id="mainMenuTemplate">
    <v-container class="p-0 fill-height" fluid style="-webkit-app-region: drag">
      <v-col cols="4" class="p-0">
        <v-badge
          bordered
          color="error"
          :content="notificationNum"
          offset-y="25"
          overlap
        >
          <v-btn icon color="pink" style="-webkit-app-region: no-drag;">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-badge>
        <p>{{ msg }}</p>
      </v-col>
      <v-col cols="4" class="p-0">
        <v-btn icon color="indigo" style="-webkit-app-region: no-drag;">
          <v-icon>mdi-cached</v-icon>
        </v-btn>
        <p>评价</p>
      </v-col>
      <v-col cols="4" class="p-0">
        <v-btn icon color="deep-orange" style="-webkit-app-region: no-drag;">
          <v-icon>mdi-star</v-icon>
        </v-btn>
        <p>考勤</p>
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
  data() {
    return {
      notificationNum: "",
    };
  },
  mounted() {
    this.notificationNum = 3;
  },
};
</script>
<style scoped>
.p-0 {
  padding: 0;
}
</style>

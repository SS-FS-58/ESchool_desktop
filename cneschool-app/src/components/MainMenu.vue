<template>
  <v-app id="mainMenuTemplate">
    <v-container class="p-0 fill-height" fluid style="-webkit-app-region: drag">
      <v-col cols="4" class="p-0 h-100 col-4-container">
        <!-- <v-badge
          bordered
          color="error"
          :content="notificationNum"
          offset-y="25"
          overlap
        >
          <v-btn icon color="pink" style="-webkit-app-region: no-drag;" @click="login()">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-badge> -->
        <div class="img-txt-container" style="-webkit-app-region: no-drag;" @click="login()">
          <img :src="'/icons/mainMenu/ele-userAvatar.png'" style="width:40px">
          <p class="mb-0">登錄</p>
        </div>

      </v-col>
      <v-col cols="4" class="p-0 h-100 col-4-container">
        <div class="img-txt-container" style="-webkit-app-region: no-drag;">
          <img :src="'/icons/mainMenu/medal.png'" style="width:36px">
          <p class="mb-0" style="margin-top:7px;">评价</p>
        </div>
      </v-col>
      <v-col cols="4" class="p-0 h-100 col-4-container">
        <div class="img-txt-container " style="-webkit-app-region: no-drag;">
          <img :src="'/icons/mainMenu/calendar-check.png'" style="width:28px">
          <p class="mb-0" style="margin-top: 11px">考勤</p>
        </div>
      </v-col>
    </v-container>
  </v-app>
</template>
<script>
import { mapState, mapActions } from "vuex";
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
  computed:{
    ...mapState(["isLogin","isLoginError"])
  },
  methods:{  
    ...mapActions(["login"]),
  }
};
</script>
<style scoped>
.p-0 {
  padding: 0;
}
.m-0{
  margin: 0;
}
.ml-0{
  margin-left: 0;
}
.mr-0{
  margin-right: 0;
}
.mt-0{
  margin-top: 0;
}
.mb-0{
  margin-bottom: 0;
}
.v-application{
  line-height: 1!important;
}
.h-100{
  height: 100%;
}
.col-4-container{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.img-txt-container{
  border-radius: 6px;
  cursor: pointer;
  padding: 5px;
  width: 80%;
  background: white;
  transition: background 0.5s ease;
}
.img-txt-container:hover{
  background: #68a7eb;
}
.img-txt-container p{
  font-size: 11pt;
  color: gray;
}
.img-txt-container:hover p{
  color: white;
}
</style>
<template>
  <v-container>
    <h1>{{ title }}</h1>
    <p>{{ count }}</p>
    <v-btn
      @click="
        count++;
        alert('dfsd');
      "
      >Add</v-btn
    >
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "Login",
      count: 1,
    };
  },
};
</script>

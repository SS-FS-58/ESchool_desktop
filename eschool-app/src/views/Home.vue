<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid
        ><v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-row>
                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1
                        class="text-center display-2 teal--text text-accent-3"
                      >
                        SIgn in to Diprella
                      </h1>
                    </v-card-text>
                  </v-col>
                  <v-col cols="12" md="4"></v-col>
                </v-row>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  date: () => ({
    step: 1,
  }),
  props: {
    source: String,
  },
};
</script>

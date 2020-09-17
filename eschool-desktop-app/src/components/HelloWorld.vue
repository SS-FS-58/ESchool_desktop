<template>
  <v-container fluid>
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>Editor Doc</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-eye</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-textarea v-model="text"></v-textarea>
      </v-card-text>
    </v-card>
  </v-container>
</template>
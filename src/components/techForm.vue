<template>
    <form>
      <!-- Sample Tech Form Field -->
      <v-text-field label="Technology" v-model="techField" required></v-text-field>
  
      <v-btn>Submit</v-btn>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const techField = ref('');
  </script>
  
  <style scoped>
  form {
    background-color: #e0f7fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  
<script setup>
import WelcomeItem from './WelcomeItem.vue'


  import { ref } from 'vue'

  const visible = ref(false)


const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    
    <template #heading>
  <div class="text-center text-red">RJA LAPTOP STAFF ONLY</div>
</template>
  </WelcomeItem>

  <WelcomeItem>
    
    
     <template #heading>
      <v-card
      class="mx-auto pa-12 pb-2 bg-grey-darken-3 "
      elevation="8"
      max-width="448"
      rounded="lg"
      >
      <div class="text-subtitle-1  text-white">Admin</div>

      <v-text-field
        density="compact"
        placeholder="Admin account"
        prepend-inner-icon="mdi-account-circle"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 ttext-white d-flex align-center justify-space-between"
      >
        Password

        
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter system password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>
      
      <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
        Log In
      </v-btn>

      <v-card-text class="text-center">
        
      </v-card-text>
      </v-card>
  
      </template>
  </WelcomeItem>


 
</template>

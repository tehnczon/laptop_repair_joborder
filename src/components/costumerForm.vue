<template>
    <form>
      <!-- Name Field -->
      <v-text-field
        v-model="state.name"
        :counter="10"
        :error-messages="v$.name.$errors.map(e => e.$message)"
        label="Name"
        required
        @blur="v$.name.$touch"
        @input="v$.name.$touch"
      ></v-text-field>
  
      <!-- Contact Number Field (Replaces Email) -->
      <v-text-field
        v-model="state.contactNumber"
        :error-messages="v$.contactNumber.$errors.map(e => e.$message)"
        label="Contact Number"
        required
        type="tel"
        @blur="v$.contactNumber.$touch"
        @input="v$.contactNumber.$touch"
      ></v-text-field>

       <!-- Address Field-->
       <v-text-field
        v-model="state.message"
        :error-messages="v$.contactNumber.$errors.map(e => e.$message)"
        label="Address"
        required
        type="address"
        @blur="v$.contactNumber.$touch"
        @input="v$.contactNumber.$touch"
      ></v-text-field>

      <!-- Laptop Model Field-->
      <v-text-field
        v-model="state.message"
        :error-messages="v$.contactNumber.$errors.map(e => e.$message)"
        label="Laptop Model"
        required
        type="lap"
        @blur="v$.contactNumber.$touch"
        @input="v$.contactNumber.$touch"
      ></v-text-field>
        
     
         <v-row>
            <v-col cols="auto">
            <v-checkbox label="Battery"></v-checkbox>
            </v-col>
            <v-col cols="auto">
            <v-checkbox label="WiFi Card"></v-checkbox>
            </v-col>

            

       
        </v-row>

        



  
      <!-- Checkbox Field -->
      <v-checkbox
        v-model="state.checkbox"
        :error-messages="v$.checkbox.$errors.map(e => e.$message)"
        label="Do you agree?"
        required
        @blur="v$.checkbox.$touch"
        @change="v$.checkbox.$touch"
      ></v-checkbox>
  
      <!-- Submit Button -->
      <v-btn
        class="me-4"
        @click="v$.$validate"
      >
        Submit
      </v-btn>
  
      <!-- Clear Button -->
      <v-btn @click="clear">
        Clear
      </v-btn>
    </form>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { required, helpers } from '@vuelidate/validators'
  
  const initialState = {
    name: '',
    contactNumber: '',
    checkbox: null,
  }
  
  const state = reactive({
    ...initialState,
  })
  
  const rules = {
    name: { required },
    contactNumber: { required, contactNumber: helpers.regex(/^\+?\d{10,15}$/, 'Invalid contact number') },
    checkbox: { required },
  }
  
  const v$ = useVuelidate(rules, state)
  
  function clear() {
    v$.value.$reset()
  
    for (const [key, value] of Object.entries(initialState)) {
      state[key] = value
    }
  }
  </script>
  
  <style scoped>
  form {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  
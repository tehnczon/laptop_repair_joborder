import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './vuetify' // Import the Vuetify plugin
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';


createApp(App)
  .use(vuetify) // Use the Vuetify plugin
  .mount('#app')

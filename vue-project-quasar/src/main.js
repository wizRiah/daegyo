import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'





createApp(App).use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  }).mount('#app')
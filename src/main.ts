import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// VueVideoPlayer
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

import './assets/base.css'

import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// VueVideoPlayer
app.use(VueVideoPlayer)

app.mount('#app')


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createClient } from '@supabase/supabase-js'

import App from './App.vue'
import router from './router'

// VueVideoPlayer
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// VueVideoPlayer
app.use(VueVideoPlayer)

app.mount('#app')

const supabaseUrl = process.env.SUPABASE_PUBLIC_URL
const supabaseKey = process.env.SUPABASE_PUBLIC_KEY
createClient(supabaseUrl!.toString(), supabaseKey!.toString())

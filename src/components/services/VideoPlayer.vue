<script lang="ts">
import { defineComponent } from 'vue'
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

export default defineComponent({
  components: {
    VideoPlayer
  }
})
</script>

<!-- have database connection value of API URL here -->
<template>
  <video-player src="" post="" controls :loop="false" :volume="0.5" />
</template>

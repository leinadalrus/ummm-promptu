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

<template>
  <video-player poster="@/resources/poster.jpg" :loop="false" :volume="0.5" />
</template>

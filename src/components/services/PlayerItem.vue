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
  <video-player 
    src="@/private/assets/video.webm"
    poster="@/private/assets/poster.webm"
    controls
    :loop="true"
    :volume="0.6"
  />
</template>
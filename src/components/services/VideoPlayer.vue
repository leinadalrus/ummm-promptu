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
  <main>
    <article
      class="min-h-screen flex items-center justify-center"
    >
      <video-player
        :children="[]"
        src=""
        post=""
        controls
        :loop="false"
        :volume="0.5"
      >
        <template v-slot="{ player, state }">
          <div class="custom-player-controls">
            <button @click="state.playing ? player.pause() : player.play()">
              {{ state.playing ? 'Pause' : 'Play' }}
            </button>
            <button @click="player.muted(!state.muted)">
              {{ state.muted ? 'UnMute' : 'Mute' }}
            </button>
          </div>
        </template>
      </video-player>
    </article>
  </main>
</template>

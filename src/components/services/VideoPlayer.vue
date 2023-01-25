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
  <main
    class="w-640 md:-800 lg:1280 bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
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
    <article
      class="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl bg-white dark:bg-black"
    ></article>
  </main>
</template>

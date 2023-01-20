<script lang="ts">
import { defineComponent } from 'vue'
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import PlayerItem from './PlayerItem.vue'

export default defineComponent({
  components: {
    PlayerItem
  }
})
</script>

<template>
  <PlayerItem :children="[]">
    <template v-slot="{ player, state }">
      <div class="custom-player-controls">
        <button @click="state.playing ? player.pause() : player.play()">
          {{ state.playing ? 'Pause' : 'Play' }}
        </button>
        <button @click="player.muted(!state.muted)">
          {{ state.muted ? 'UnMute' : 'Mute' }}
        </button>
        <!-- more custom controls elements ... -->
      </div>
    </template>
  </PlayerItem>
</template>

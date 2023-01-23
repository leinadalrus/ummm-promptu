<script lang="ts">
import { render, screen, fireEvent } from '@testing-library/vue'
import VideoPlayerVue from './services/VideoPlayer.vue'
import { describe, it } from 'vitest'

describe('Event message(s) emission from event handlers', () => {
  it("Event emits a string-message from a component's action", async () => {
    const { emitted } = render(VideoPlayerVue)
    await fireEvent.click(screen.getByRole('Play'))
    await fireEvent.click(screen.getByRole('Pause'))
    await fireEvent.click(screen.getByRole('Mute'))
    await fireEvent.click(screen.getByRole('UnMute'))
    console.table(emitted())
  })
})

export default {
  data () {
    return {
      VideoPlayerVue: VideoPlayerVue
    }
  },

  methods: {
    play () {
      this.$emit('Play', this.play)
    },
    pause () {
      this.$emit('Pause', this.pause)
    },
    mute () {
      this.$emit('Mute', this.mute)
    },
    unmute () {
      this.$emit('UnMute', this.unmute)
    },
  }
}
</script>

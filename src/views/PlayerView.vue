<script lang="ts">
import Player from '@/components/services/Player.vue'

export default {
  name: 'VideoExample',
  components: {
    Player
  },
  data () {
    return {
      videoOptions: {
        autoplay: false,
        controls: true,
        sources: [
          {
            src: '@/private/assets/video.webm',
            type: 'video/webm'
          }
        ]
      }
    }
  }
}
</script>

<!-- !Need to connect a database connector:
- Data-driven by having it redirect into the API URL-
-and then have it I/O from there
-->
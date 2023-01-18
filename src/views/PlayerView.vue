<script lang="ts">
import VueVideoPlayer from '@/components/services/Player.vue'

export default {
  name: 'VideoExample',
  components: {
    VueVideoPlayer
  },
  data () {
    return {
      videoOptions: {
        autoplay: false,
        controls: true,
        sources: [
          {
            src: '/resources/user/video.webm',
            type: 'video/webm'
          }
        ]
      }
    }
  }
}
</script>

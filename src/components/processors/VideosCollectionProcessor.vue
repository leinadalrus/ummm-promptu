<script lang="ts">
import { reactive, ref, watch } from 'vue'
import { onMounted } from 'vue'

onMounted(() => {})

const observedItem = ref('videosCollection') // reference GraphQL query

watch(
  observedItem,
  async (incomingEvent, outgoingEvent) => {
    // console args value is-equal-to 2
    if (incomingEvent.lastIndexOf('2')) {
      let response = await fetch('') // fetch graphql api url
      observedItem.value = (await response.json()).value
    }
  },
  { immediate: true }
)

export const storeVideos = reactive({
  video: {},
})
</script>


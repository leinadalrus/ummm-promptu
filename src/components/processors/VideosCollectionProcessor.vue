<script lang="ts">
import { reactive, ref, watch } from 'vue'
import { onMounted } from 'vue'

onMounted(() => {})

const observedItem = ref('videosCollection') // reference GraphQL query
import { supabase } from '../client/supabaseClient'

// Initialize the JS client
const SupabasePostgresUri = process.env.SUPABASE_POSTGRES_URI?.toString()

watch(
  observedItem,
  async (incomingEvent, outgoingEvent) => {
    // console args value is-equal-to 2
    if (incomingEvent.lastIndexOf('2')) {
      let response = await fetch(
        SupabasePostgresUri + '/videosCollection/${videos.value}'
      ) // fetch graphql api url VIP(Replace): replace 'todo' values
      observedItem.value = await response.json()
    }
  },
  { immediate: true }
)

// SUBSCRIBE TO ALL EVENTS
const videosCollection = supabase
  .channel('custom-all-channel')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'videosCollection' },
    payload => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()

export const storeVideos = reactive({
  videosCollection: { videosCollection }
})
</script>

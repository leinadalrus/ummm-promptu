<script lang="ts">
import { createClient, useQuery } from 'urql'
import { supabase } from '../client/supabaseClient'
import { reactive, ref, watch } from 'vue'
import { onMounted } from 'vue'

// Get the Supabase Public Anon Key
const SupabasePublicKey = process.env.SUPABASE_PUBLIC_KEY?.toString()

// Prepare API key and Authorization header
export const headers = {
  apikey: SupabasePublicKey,
  authorization: `Bearer ${SupabasePublicKey}`
}

// Create GraphQL client
// See: https://formidable.com/open-source/urql/docs/basics/react-preact/#setting-up-the-client
export const client = createClient({
  url: '<SUPABASE_URL>/graphql/v1'
  /*fetchOptions: function createFetchOptions() {
    return { headers }
  },*/
})

const observedItem = ref('videosCollection') // reference GraphQL query

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

onMounted(() => {})
</script>

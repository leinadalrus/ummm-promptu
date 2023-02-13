<script lang="ts">
import { createClient, useQuery } from 'urql'
import { supabase } from '../client/supabaseClient'
import { reactive, ref, watch } from 'vue'
import { onMounted } from 'vue'

// Get the Supabase Public Anon Key
const SupabasePublicUrl = process.env.SUPABASE_PUBLIC_URL?.toString()
const SupabasePublicKey = process.env.SUPABASE_PUBLIC_KEY?.toString()

// Prepare API key and Authorization header
export const headers = {
  apikey: SupabasePublicKey,
  authorization: `Bearer ${SupabasePublicKey}`
}

// Create GraphQL client
// See: https://formidable.com/open-source/urql/docs/basics/react-preact/#setting-up-the-client
export const client = createClient({
  url: SupabasePublicUrl + '/graphql/v1'
  /*fetchOptions: function createFetchOptions() {
    return { headers }
  },*/
})

// Create a function to handle inserts
const handleUpdates = (payload: any) => {
  console.log('Change received!', payload)
}

// Select column and its corresponding rows
const { data: videos } = await supabase.from('videos').select('*')

// Listen to updates
const videoData = async (data: any) => {
  await supabase.from('videos').update('videos')

  handleUpdates(data)
}

// Prepare API key and Authorization header

// Create GraphQL client
// See: https://formidable.com/open-source/urql/docs/basics/react-preact/#setting-up-the-client

// Prepare our GraphQL query
const VideosQuery = `
  query {
    videos {
      edges {
        node {
          id
          title
          description
          caption
        }
      }
    }
  }
`

// Initialize the JS client
const SupabasePostgresUri = process.env.SUPABASE_POSTGRES_URI?.toString()

// SUBSCRIBE TO ALL EVENTS
const videosCollection = supabase
  .channel('custom-all-channel')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'videos' },
    payload => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()

  const observedItem = ref(videosCollection) // reference GraphQL query

  watch(
  observedItem,
  async (incomingEvent, outgoingEvent) => {
    // console args value is-equal-to 2
    if (incomingEvent.topic == '/^videos.value$/') {
      let response = await fetch(
        SupabasePostgresUri + '/videos/${videos.value}'
      ) // fetch graphql api url VIP(Replace): replace 'todo' values
      observedItem.value = await response.json()
    }
  },
  { immediate: true }
)

export const videosReactiveComponent = reactive({
  videosCollection
})

// Query for the data (React)
useQuery({
  query: VideosQuery
})

onMounted(() => {})
</script>

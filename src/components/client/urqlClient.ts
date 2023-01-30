import { createClient, useQuery } from 'urql'
import { supabase } from './supabaseClient.ts'

// Get the Supabase Public Anon Key
const SupabasePublicKey = process.env.SUPABASE_PUBLIC_KEY?.toString()

// Prepare API key and Authorization header
const headers = {
  apikey: SupabasePublicKey,
  authorization: `Bearer ${SupabasePublicKey}`,
}

// Create GraphQL client
// See: https://formidable.com/open-source/urql/docs/basics/react-preact/#setting-up-the-client
const client = createClient({
  url: '<SUPABASE_URL>/graphql/v1',
/*fetchOptions: function createFetchOptions() {
    return { headers }
  },*/
})

// Create a function to handle inserts
const handleUpdates = (payload: any) => {
  console.log('Change received!', payload)
}

// Select column and its corresponding rows
const {data: videos} = await supabase
  .from('videos')
  .select("*")

// Listen to updates
const { data: video } = await supabase.from('videos').on('UPDATE', handleUpdates).subscribe()

// Prepare API key and Authorization header

// Create GraphQL client
// See: https://formidable.com/open-source/urql/docs/basics/react-preact/#setting-up-the-client

// Prepare our GraphQL query
const VideosQuery = `
  query {
    videosCollection {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`

// Query for the data (React)
const [result, reexecuteQuery] = useQuery({
  query: VideosQuery
})

// Read the result
const { error } = result
const reexecuteResult = reexecuteQuery
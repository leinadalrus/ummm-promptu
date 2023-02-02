import { createClient, useQuery } from 'urql'
import { supabase } from './supabaseClient'

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

// Select column and its corresponding rows
export const { data: videos } = await supabase.from('videos').select('*')
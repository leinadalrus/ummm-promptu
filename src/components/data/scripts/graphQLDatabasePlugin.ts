import { useQuery } from 'urql'
import { supabase } from '../../client/supabaseClient'

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
    videosCollection {
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

// Query for the data (React)
useQuery({
  query: VideosQuery
})

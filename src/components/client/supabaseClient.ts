import { createClient } from '@supabase/supabase-js'

// Initialize the JS client
const SupabasePublicURL = process.env.SUPABASE_PUBLIC_URL?.toString()
const SupabasePublicKey = process.env.SUPABASE_PUBLIC_KEY?.toString()

export const supabase = createClient(SupabasePublicURL!, SupabasePublicKey!)
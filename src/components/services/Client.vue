<script lang="ts">
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_PUBLIC_URL
const supabaseKey = process.env.SUPABASE_PUBLIC_KEY

export const supabase = createClient(supabaseUrl!.toString(), supabaseKey!.toString())
</script>
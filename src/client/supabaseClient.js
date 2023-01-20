import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_PUBLIC_URL
const supabaseKey = process.env.SUPABASE_PUBLIC_KEY

let data, error

// helper functions
const authoriseUserSignUp = async (data, error) =>
  await supabase.auth.signUp({
    email: 'someone@email.com',
    password: 'uxLOKOnREwellWHjYNBh'
  })

const authoriseUserPassword = async (data, error) =>
  await supabase.auth.signInWithPassword({
    email: 'someone@email.com',
    password: 'uxLOKOnREwellWHjYNBh'
  })

const authoriseUserOtp = async (data, error) =>
  await supabase.auth.signInWithOtp({
    email: 'someone@email.com'
  })

const authorisePhoneSignUp = async (data, error) =>
  await supabase.auth.signUp({
    phone: '+13334445555',
    password: 'some-password'
  })

const authorisePhoneOtp = async (data, error) =>
  await supabase.auth.signInWithOtp({
    phone: '+13334445555'
  })

const verifyOtp = async (data, error) =>
  await supabase.auth.verifyOTP({
    phone: '+13334445555',
    token: '123456'
  })

const signInWithOAuth = async (data, error) =>
  await supabase.auth.signInWithOAuth({
    provider: 'github'
  })

export const supabaseClient = () => createClient(supabaseUrl, supabaseKey)

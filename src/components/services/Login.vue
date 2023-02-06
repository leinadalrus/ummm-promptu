<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '../client/supabaseClient'

const loading = ref(false)
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value
    })
    if (error) throw Error('Check your email for the login link!')
  } catch (error) {
    if (error instanceof Error) {
      throw Error(error.message)
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <h1 class="header">Hello, and welcome!</h1>
      <p class="description">Sign in here:</p>
      <div>
        <input
          class="inputField"
          type="email"
          placeholder="Your email"
          v-model="email"
          required
        />
      </div>
      <div>
        <input
          class="inputField"
          type="password"
          placeholder="Your Password"
          v-model="password"
          required
        />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : undefined"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>

<!-- TODO(Daniel): Change alert functions -->

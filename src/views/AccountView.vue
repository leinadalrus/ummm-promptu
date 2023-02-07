<script setup lang="ts">
import Account from '@/components/models/Account.vue'
import Login from '@/components/services/Login.vue'
</script>

<template>
  <div v-show="Login">
    <template>
      <Login />
    </template>
  </div>
  <Account />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { onMounted } from 'vue'

onMounted(() => {})

const observedItem = ref('videosCollection') // reference GraphQL query

watch(
  observedItem,
  async (incomingEvent, outgoingEvent) => {
    // console args value is-equal-to 2
    if (incomingEvent.lastIndexOf('2')) {
      let response = await fetch('') // fetch graphql api url
      observedItem.value = (await response.json()).value
    }
  },
  { immediate: true }
)
</script>

<template>
  <input v-model="observedItem" />
</template>

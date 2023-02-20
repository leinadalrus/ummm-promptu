<script lang="ts">
import { ifError } from 'assert'
import { reactive, ref } from 'vue'

export default {
  // `setup` is a special hook dedicated for composition API.
  setup() {
    const sourceName = document.getElementById('url')?.innerHTML
    const streamCollection = reactive([ref({ sourceName })])
    const videoSources = reactive({ sources: streamCollection })

    function changeStream(sourceName: string) {
      let Sourcing = videoSources.sources.keys.toString() ? videoSources.sources.values.toString() === sourceName : sourceName
      videoSources.sources.forEach(sourceName => {
        if (!(Sourcing))
        ifError(sourceName)
      })
        
      return Sourcing
    }

    window.addEventListener(
      'hashchange',
      (hash) => {
        if (location.hash === changeStream(sourceName!)) {
          console.table(videoSources.sources)
          console.table(streamCollection[0].value)
        }
      },
      false,
    )

    // expose the state to the template
    return {
      videoSources,
      changeStream,
    }
  },
}
</script>

<template>
  <label for="url">Enter an https:// URL:</label>
  <input type="url" name="url" id="url" pattern="https://.*" size="32" />
</template>

<script lang="ts">
'use strict'

import * as fs from 'fs'
import * as path from 'path'
import { ifError } from 'assert'
import { reactive, ref } from 'vue'
import { assert } from 'vitest'
const papa = require('papaparse')

export default {
  // `setup` is a special hook dedicated for composition API.
  setup() {
    const sourceName = document.getElementById('url')?.innerHTML
    const streamCollection = reactive([ref({ sourceName })])
    const videoSources = reactive({ sources: streamCollection })

    function changeStream(sourceName: string) {
      let sourceOptions = videoSources.sources.keys.toString()
        ? videoSources.sources.values.toString() === sourceName
        : sourceName
      videoSources.sources.forEach((sourceName) => {
        if (!sourceOptions) ifError(sourceName)
      })

      return sourceOptions
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

    function crawlScrapeFrom(sourceName: string) {
      return sourceName
    }

    function promiseCommas(filename: string) {
      return new Promise((ok) => {
        fs.readFile(filename, 'utf-8', function (err, data) {
          if (err) ifError(err)
          ok(data)
        })
      })
    }

    function resolveCommas(filepath: string) {
      return promiseCommas(filepath)
        .then((data) => {
          const result = papa.parse(data, {
            header: true,
            dynamicTyping: true,
          })
          return result.data
        })
        .catch((err) => {
          console.table(err.stack)
        })
    }

    assert(
      crawlScrapeFrom(sourceName!) === changeStream(sourceName!),
      '`sourceName` should be decide all-round for both functions',
    )

    // expose the state to the template
    return {
      videoSources,
      changeStream,
      resolveCommas,
    }
  },
}
</script>

<template>
  <label for="url">Enter an https:// URL:</label>
  <input type="url" name="url" id="url" pattern="https://.*" size="32" />
</template>

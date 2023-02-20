<script lang="ts">
import App from '@/App.vue'
import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'

type ConcernError = 'Ok' | 'Option' | 'Err'

test.bind({
  viewport: {
    width: 800,
    height: 600
  }
})

test('Check the concern of error message prop', () => {
  let array = new Array()
  array.forEach((element: string) => {
    expect(() => {
      checkConcerns(element)
      throw Error('Error in: concern of error message prop')
    })
  })
})

export function checkConcerns(concern: string) {
  if (concern != 'Ok' || 'Option' || 'Err') {
    throw Error(`${concern} isn't equal to either Ok | Option | Err`)
  }

  return true
}

export default {
  props: {
    concern: {
      type: String as () => ConcernError,
      required: true,
      checker: checkConcerns
    }
  }
}
</script>

<template :class="concern-error"></template>

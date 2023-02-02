import { describe, expect, test } from 'vitest'

describe('Import Vue3 Components', () => {
  test('NodeJS import functions as expected', async () => {
    const item = await import('@/components/services/CaptionItem.vue')

    expect(item).toBeDefined()
  })
})

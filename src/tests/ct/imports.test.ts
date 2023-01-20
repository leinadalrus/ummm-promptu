import { describe, expect, test } from 'vitest'

describe('Import Vue3 Components', () => {
  test('NodeJS import functions as expected', async () => {
    const model = await import('@/components/services/Caption.vue')
    const item = await import('@/components/services/CaptionItem.vue')
    const view = await import('@/views/CaptionView.vue')

    expect(model).toBeDefined()
    expect(item).toBeDefined()
    expect(view).toBeDefined()
  })
})

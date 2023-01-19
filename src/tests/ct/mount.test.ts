import { mount } from '@vue/test-utils'
import { test, expect } from '@playwright/test'
import CaptionItemVue from '@/components/services/CaptionItem.vue'
import CaptionVue from '@/components/services/Caption.vue'

const REPO = 'snye-v-pr'
const USER = 'leinadalrus'

test.beforeAll(async ({ page }) => {
  await page.goto('localhost:4000' ? 'localhost:5137' : 'localhost')
})

test('OnMount() function, component parameterised', async () => {
  expect(CaptionItemVue).toBeTruthy()
  expect(CaptionVue).toBeTruthy()
})

test('This Should Create an Issue Report', async ({ request }) => {
  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
    data: {
      title: `[Issue] ${USER}/${REPO} issue` + 1,
      body: `'[Issue] ${USER}/${REPO} issue'`
    }
  })

  expect(newIssue.ok()).toBeTruthy()

  const issues = await request.get(`/repos/${USER}/${REPO}/issues`)

  expect(issues.ok()).toBeTruthy()

  expect(await issues.json()).toContainEqual(
    expect.objectContaining({
      title: `[Issue] ${USER}/${REPO} issue` + 1,
      body: `'[Issue] ${USER}/${REPO} issue'`
    })
  )
})

test.afterAll(async ({ request }) => {
  // Delete the repository
  const response = await request.delete(`/repos/${USER}/${REPO}/issues`);
  expect(response.ok()).toBeTruthy();
});

import { test, expect } from '@playwright/test'

test.describe('Travel Agency - non-demo mode smoke tests', () => {
  test('homepage loads with hero content from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Azure Horizons Travel/)
    // Hero section content from the homepage node
    await expect(page.locator('h1')).toContainText(/Discover the World/)
    // Navigation links
    await expect(page.locator('a[href="/destinations"]').first()).toBeVisible()
  })

  test('destinations listing shows items from Drupal', async ({ page }) => {
    await page.goto('/destinations')
    await expect(page.locator('h1')).toContainText('Destinations')
    // Should have at least one destination card
    const cards = page.locator('a[href^="/destinations/"]')
    await expect(cards.first()).toBeVisible()
    // Verify known destination appears
    await expect(page.getByText('Santorini, Greece')).toBeVisible()
  })

  test('destination detail page renders', async ({ page }) => {
    await page.goto('/destinations/santorini-greece')
    await expect(page.locator('h1')).toContainText('Santorini, Greece')
    await expect(page.getByText('Back to Destinations')).toBeVisible()
  })

  test('packages listing shows items from Drupal', async ({ page }) => {
    await page.goto('/packages')
    await expect(page.locator('h1')).toContainText('Travel Packages')
    const cards = page.locator('a[href^="/packages/"]')
    await expect(cards.first()).toBeVisible()
    await expect(page.getByText('Greek Island Hopping Adventure')).toBeVisible()
  })

  test('package detail page renders', async ({ page }) => {
    await page.goto('/packages/greek-island-hopping')
    await expect(page.locator('h1')).toContainText('Greek Island Hopping')
    await expect(page.getByText('Back to Packages')).toBeVisible()
  })

  test('testimonials listing shows items from Drupal', async ({ page }) => {
    await page.goto('/testimonials')
    await expect(page.locator('h1')).toContainText('Testimonials')
    const cards = page.locator('a[href^="/testimonials/"]')
    await expect(cards.first()).toBeVisible()
  })

  test('testimonial detail page renders', async ({ page }) => {
    await page.goto('/testimonials/sarah-mitchell')
    await expect(page.locator('h1')).toContainText('Trip of a Lifetime')
    await expect(page.getByText('Back to Testimonials')).toBeVisible()
  })

  test('blog listing shows posts from Drupal', async ({ page }) => {
    await page.goto('/blog')
    await expect(page.locator('h1')).toContainText('Travel Blog')
    const cards = page.locator('a[href^="/blog/"]')
    await expect(cards.first()).toBeVisible()
  })

  test('blog detail page renders', async ({ page }) => {
    await page.goto('/blog/ultimate-packing-guide')
    await expect(page.locator('h1')).toContainText('Ultimate Packing Guide')
    await expect(page.getByText('Back to Blog')).toBeVisible()
  })
})

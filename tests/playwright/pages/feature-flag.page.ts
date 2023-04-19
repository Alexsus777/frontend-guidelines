import { expect, Page, Locator } from '@playwright/test'
import { GeneralCommands } from './general-commands.page'

export class FeatureFlag extends GeneralCommands {
  page: Page
  featureFlagSwitcher: Locator
  featureFlagButton: Locator
  featureFlagValue: string

  constructor (page: Page) {
    super(page)
    this.page = page
    this.featureFlagSwitcher = page.getByTestId('heading-text')
    this.featureFlagButton = page.getByTestId('feature-flag')
    this.featureFlagValue = ''
  }

  async visitTheFeatureFlagPage () {
    return this.page.goto('/example-flags')
  }

  async clickTheFirstFF () {
    await this.featureFlagSwitcher.first().click()
  }

  async assertTheFirstFlagDisabled () {
    await expect(this.featureFlagSwitcher.first()
      .locator('input')).toHaveAttribute('aria-checked', 'false')
  }

  async saveTheFeatureFlagValue () {
    this.featureFlagValue = (await this.firstTableRow().innerText())
  }

  async assertTheFlagInLocalStorage () {
    expect(await this.page.evaluate(() => { localStorage.getItem(this.featureFlagValue) })).not.toBeNull()
  }

  async assertTheFlagNotInStorage () {
    expect(await this.getTheLocalStorage())
      .not.toHaveProperty(`${this.featureFlagValue}`)
  }

  async clickTheLoginButton () {
    await this.pageHeader.getByText('Login').click()
  }

  async assertTheFFlagButtonVisible () {
    await expect(this.featureFlagButton).toBeVisible()
  }

  async assertFFlagButtonNotVisible () {
    await expect(this.featureFlagButton).not.toBeVisible()
  }
}

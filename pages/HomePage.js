// pages/HomePage.js
import { expect } from '@playwright/test';

export default class HomePage {
  constructor(page) {
    this.page = page;
    this.pageTitle = "PKT_Beasiswa";
  }

  async goto() {
    await this.page.goto("/");
  }

  async expectTitle() {
    await expect(this.page).toHaveTitle(this.pageTitle);
  }

  async verifyHalamanBeranda() {
    await expect(this.page).toHaveTitle(this.pageTitle);
  }
}

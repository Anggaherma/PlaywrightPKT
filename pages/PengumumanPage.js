import { expect } from '@playwright/test';
import pengumumanSelectors from '../selectors/pengumumanSelectors.js';

export default class PengumumanPage {
  constructor(page) {
    this.page = page;
    this.judulHalaman = page.locator(pengumumanSelectors.announcementTitle);
  }

  async goto() {
    await this.page.goto("/pengumuman");
  }

  async verifyHalamanPengumuman() {
    await expect(this.judulHalaman).toBeVisible({ timeout: 15000 });
    await expect(this.judulHalaman).toHaveText(/Pengumuman/i);
  }
}

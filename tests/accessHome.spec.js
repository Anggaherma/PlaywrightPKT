// tests/home.spec.js
import { test } from '@playwright/test';
import HomePage from '../pages/HomePage.js';

test('C1 - Halaman Beranda tampil dengan benar', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.verifyHalamanBeranda();
});
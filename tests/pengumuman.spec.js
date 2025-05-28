// tests/pengumuman.spec.js
import { test } from '@playwright/test';
import PengumumanPage from '../pages/PengumumanPage.js';

test('C3 - Cek halaman pengumuman', async ({ page }) => {
  const pengumumanPage = new PengumumanPage(page);
  await pengumumanPage.goto();
  await pengumumanPage.verifyHalamanPengumuman();
});

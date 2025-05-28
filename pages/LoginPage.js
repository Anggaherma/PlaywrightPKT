// pages/LoginPage.js
import { expect } from '@playwright/test';
import loginSelectors from '../selectors/loginSelectors.js';

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.masukLink = page.locator(loginSelectors.masukLink);
    this.usernameInput = page.locator(loginSelectors.usernameInput);
    this.passwordInput = page.locator(loginSelectors.passwordInput);
    this.loginBtn = page.locator(loginSelectors.loginBtn);
    this.errorMessage = page.locator(loginSelectors.errorMessage);
  }

  async goto() {
    await this.page.goto("/");
  }

  async openLoginForm() {
    await this.masukLink.waitFor({ state: 'visible' });
    await this.masukLink.click();
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }

  async expectLoginError(expectedText) {
    await this.errorMessage.waitFor({ timeout: 5000 });
    await expect(this.errorMessage).toContainText(expectedText);
  }
}

export default LoginPage;

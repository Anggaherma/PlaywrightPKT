// tests/pkt.spec.js
import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage.js";
import HomePage from "../pages/HomePage.js";
import credentials from '../resources/data.json' assert { type: 'json' };

test("C1 - Access The Web Page", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.expectTitle();
});

test("C2 - Failed Login Incorrect password", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.openLoginForm();
  await loginPage.login(
    credentials.invalidCredential.username,
    credentials.invalidCredential.password
  );
  await loginPage.expectLoginError("Incorrect Username or Password");
});

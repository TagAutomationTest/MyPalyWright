import { test, expect } from '@playwright/test'
import testData from '../TestData.json';

test.describe("Login Suite", () => {

    test("Invalid Login", async ({ page }) => {
        await page.goto(testData.baseURL, { waitUntil: 'load' });
        await expect(page).toHaveTitle(testData.pageTitle);

        await page.locator('a:has-text("Login")').click()
        await expect(page).toHaveURL(testData.LoginUrl);

        await page.locator("#email").fill(testData.invalidUser.username)
        await expect(page.locator("#email")).toHaveValue(testData.invalidUser.username)

        await page.locator('[data-testid="password"]').fill(testData.invalidUser.password)
        await expect(page.locator('[data-testid="password"]')).toHaveValue(testData.invalidUser.password)

        await page.locator('button:has-text("Login")').click()

        await expect(page.locator(".MuiAlert-message")).toHaveText(testData.invalidUser.validationMsg, {
            timeout: 60000,
        });

    });

    test("Should be able to Login to Website", async ({ page }) => {
        await page.goto(testData.baseURL);

        await page.locator("#email").fill(testData.ValidUser.username)
        await expect(page.locator("#email")).toHaveValue(testData.ValidUser.username)

        await page.locator('[data-testid="password"]').fill(testData.ValidUser.password)
        await expect(page.locator('[data-testid="password"]')).toHaveValue(testData.ValidUser.password)

        await page.locator('button:has-text("Login")').click()

        await expect(page).toHaveTitle(testData.ValidUser.homeTitle)
        await expect(page.locator('button:has-text("Logout")')).toBeVisible()

    });
})

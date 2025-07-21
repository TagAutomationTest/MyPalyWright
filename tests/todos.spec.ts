import { test, expect } from '@playwright/test'
import testData from '../TestData.json';

test.describe("todo Suite", () => {
    test.use (
        {
            storageState : "storageState.json"
        }
    )
    test.beforeEach(async ({ page }) => {
        await page.goto(testData.baseURL);
    });

    test("Verify Loged in Successfully", async ({ page }) => {
        await expect(page)
            .toHaveTitle(testData.ValidUser.homeTitle)
        await expect(page.locator('button:has-text("Logout")'))
            .toBeVisible()
    });

    test("Should be able to mark a to do as completed", async ({ page }) => {
        await page.locator('[data-testid="add"]')
            .click()
        await page.locator('[data-testid="new-todo"]')
            .fill("PlayWright")
        await page.locator('[data-testid="submit-newTask"]')
            .click()
        await page.locator('[data-testid="complete-task"]')
            .nth(0)
            .click()

        await expect(page.locator('[data-testid="todo-item"]')
            .nth(0))
            .toHaveCSS("background-color", "rgb(33, 76, 97)")
    });
});
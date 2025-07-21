import { expect, request } from "@playwright/test";
import testData from '../TestData.json';


async function globalConfig() {
    const requestContext = await request.newContext();
    const response = await requestContext.post("https://qacart-todo.herokuapp.com/api/v1/users/login", {
        data: {
            email: "Tag49163@gmail.com",
            password: "Zahraa@123456789"
        }

    });
    expect(response.ok()).toBeTruthy();
    await requestContext.storageState({
        path: "storageState.json"
    }
    );
    // const Browser = await chromium.launch();
    // const page = await Browser.newPage();

    // await page.goto(testData.baseURL);

    // await page.locator("#email")
    //     .fill(testData.ValidUser.username)
    // await expect(page.locator("#email"))
    //     .toHaveValue(testData.ValidUser.username)

    // await page.locator('[data-testid="password"]')
    //     .fill(testData.ValidUser.password)
    // await expect(page.locator('[data-testid="password"]'))
    //     .toHaveValue(testData.ValidUser.password)

    // await page.locator('button:has-text("Login")')
    //     .click()
    // await expect(page.locator('button:has-text("Logout")'))
    //     .toBeVisible()
    // await page.context().storageState({
    //     path: "storageState.json"
    // }
    //);
}

export default globalConfig;
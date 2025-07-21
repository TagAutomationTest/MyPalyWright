import { test, expect } from '@playwright/test'
import testData from '../TestData.json';

test("Should be able to Login using API", async ({ request }) => {

    const response = await request.post("https://qacart-todo.herokuapp.com/api/v1/users/login", {

        headers: {
            Accept: "application/json"
        },
        data: {
            email: testData.ValidUser.username,
            password: testData.ValidUser.password
        }

    })
    console.log(await response.json());
    const body = await response.json()
    const token = body.access_token
    console.log(token);

    expect(response.ok()).toBeTruthy();
    expect(await response.json()).toHaveProperty("firstName", "Ahmed ");
});


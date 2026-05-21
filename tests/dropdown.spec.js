const{test,expect}= require('@playwright/test')

test("Select values from Dropdown", async function({page}){

    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.locator("#state").selectOption({label:"Karnataka"})

    await page.waitForTimeout(10000)
})

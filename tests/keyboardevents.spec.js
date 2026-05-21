const {test,expect}=require('@playwright/test')

test("Keyboard events in Playwright",async function({page}){
     
    await page.goto("https://www.google.com/")

    await page.locator("textarea[name='q']").type("Manjunath")

    await page.keyboard.press("Control+A")

    await page.keyboard.press("Backspace")

   // await page.keyboard.press("Enter")


})
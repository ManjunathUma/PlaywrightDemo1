const {test,expect}=require('@playwright/test')

test("Alert",async function({page}){

     await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

     await page.locator("//button[text()='Click for JS Alert']").click()
})
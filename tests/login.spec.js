const {test,expect}=require('@playwright/test')

test("Valid Login",async function({page}){
    

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    
    await page.getByPlaceholder("Username").type("Admin")

    await page.locator("input[name='password']").type("admin123")

    await page.locator("//button[@type='submit']").click()

    await expect(page).toHaveURL(/dashboard/)

    await page.getByRole('img', { name: 'profile picture', exact: true }).click()

    await page.getByText("Logout").click()

    await expect(page).toHaveURL(/login/)
})


//sample 2
const {test,expect}=require('@playwright/test')

test("Handling frames", async function({page}){
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")

    //Look for iframe locator
    const iframe=await page.frameLocator("//frame[@name='packageListFrame']")

    //Interact with the element after locating the iframe
    await iframe.locator("//a[text()='java.applet']").click();

    
})
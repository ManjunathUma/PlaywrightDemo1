const {test,expect}=require('@playwright/test')

test("My first Test",async function({page}){
  expect(12).toBe(12)
})

test.skip("My second test", async function ({page}) {
    expect(12).toBe(102)
})

test("My Third test", async function ({page}) {
    expect("Manjunath").toContain("Man")
})
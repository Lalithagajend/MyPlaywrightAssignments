/*
Launch Chromium in non-headless mode
- Create a new browser context.
- Open a new page within the browser context.
- Load the url https://login.salesforce.com/
- Use your Salesforce credentials that you’ve created
- print the title and url of a web page using Playwright.
*/
import test from "@playwright/test";
//launch page in headless
test ("Print the title and URL of the Salesforce webpage afer login",async({page,headless})=>{
  //load url for salesforce  
    await page.goto("https://login.salesforce.com/");
    //input username and password
    await page.locator(`#username`).fill("laliedu.a158a63ae680@agentforce.com")
    await page.locator(`#Login`).click();
    //wait for page load to enter password and click login
    await page.waitForTimeout(2000)
    await page.locator(`#password`).fill("Playwright@23")
    await page.locator(`#Login`).click()

    console.log(await page.title())
})
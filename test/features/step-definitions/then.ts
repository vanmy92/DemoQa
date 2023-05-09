import { Then } from "@wdio/cucumber-framework";
import chai from "chai";
import homeBookStorePage from "../../page-objects/homeBookStore.page";

Then(/^Verify that the all the book shows in page$/, async function(){

    let numberofBookStores = await homeBookStorePage.allNumberofItems()
    console.log(`------ the number of book stores: ${numberofBookStores}`)
    await browser.debug()

})
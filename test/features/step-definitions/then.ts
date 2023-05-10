import { Then } from "@wdio/cucumber-framework";
import chai from "chai";
import homeBookStorePage from "../../page-objects/homeBookStore.page";

Then(/^Verify that the all the book shows in page$/, async function(){

    let numberofBookStores = await homeBookStorePage.allNumberofItems()
    console.log(`------ the number of book stores: ${numberofBookStores}`)
    let allDataItems = await homeBookStorePage.listTitle(this.testid)
    console.log(`--------------- all data items ----------------`)
    console.log(allDataItems)
    let allDataItems1 = await homeBookStorePage.listAuthort(this.testid)
    console.log(`--------------- all data items ----------------`)
    console.log(allDataItems1)
    let allDataItems2 = await homeBookStorePage.listPublisher(this.testid)
    console.log(`--------------- all data items ----------------`)
    console.log(allDataItems2)

    
    await homeBookStorePage.getAllDataOfItem_2(this.testid)
    // let allDataItems_2 = await homeBookStorePage.getAllDataOfItem_2(this.testid)
    // console.log(`--------------- all data items ----------------`)
    // console.log(allDataItems_2)
    // let allDataItems_1 = await homeBookStorePage.getAllDataOfItem1(this.testid)
    // console.log(`--------------- all data items ----------------`)
    // console.log(allDataItems_1)

    // let allDataItems_1 = await homeBookStorePage.getDivData(this.testid)
    // console.log(`--------------- all data items ----------------`)
    // console.log(allDataItems_1)

    // await homeBookStorePage.getAllDataOfItem(this.testid)
    await browser.debug()

})
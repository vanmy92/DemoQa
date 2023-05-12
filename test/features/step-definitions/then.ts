import { Then } from "@wdio/cucumber-framework";
import chai from "chai";
import homeBookStorePage from "../../page-objects/homeBookStore.page";
import bookDetailsPage from "../../page-objects/bookDetails.page";
import fetch from 'node-fetch';

Then(/^Verify that the all the book shows in page$/, async function(){

    let numberofBookStores = await homeBookStorePage.allNumberofItems()
    console.log(`------ the number of book stores: ${numberofBookStores}`)
    // let allDataItems = await homeBookStorePage.listTitle(this.testid)
    // console.log(`--------------- all data items ----------------`)
    // console.log(allDataItems)
    // let allDataItems1 = await homeBookStorePage.listAuthort(this.testid)
    // console.log(`--------------- all data items ----------------`)
    // console.log(allDataItems1)
    // let allDataItems2 = await homeBookStorePage.listPublisher(this.testid)
    // console.log(`--------------- all data items ----------------`)
    // console.log(allDataItems2)
    await homeBookStorePage.getAllDataOfItem_2(this.testid)
    // await browser.debug()
})

Then(/^Verify that the user is at Login page$/, async function(){
    console.log(`--------------`)   
    let username = await homeBookStorePage.getUserNameLabel + await homeBookStorePage.getUserNameValue
    console.log(username)
    console.log(`--------------`)
    // await browser.debug()
})


Then(/^Get all the value of the book and verify it$/, async function(){

   let allvalueBeside = await bookDetailsPage.listAllValue(this.testid)
    console.log(allvalueBeside)
    console.log(`--------------------------`)
    let result =  await bookDetailsPage.getAllData(this.testid)
    console.log(result)
    console.log(`--------------------------`)
    
 /*    
    // Done Get by fetch data
    const fetch = await import('node-fetch');
    const response = await fetch.default('https://demoqa.com/BookStore/v1/Book?ISBN=9781449325862');
    const jsonData = await response.json();
    console.log(jsonData);
 */
    await browser.debug()
})


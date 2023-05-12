import { Then } from "@wdio/cucumber-framework";
import chai from "chai";
import homeBookStorePage from "../../page-objects/homeBookStore.page";
import bookDetailsPage from "../../page-objects/bookDetails.page";
import fetch from 'node-fetch';
import generateToken from "../../../data/api-res/GenerateTokenAPIByPost.json"
import responseBodyReturn from "../../../data/api-res/ResponseBodyReturn.json"
import fs from "fs";
import reporter from "../../helper/reporter";
import apiHelper from "../../helper/apiHelper";


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



Then(/^Verify that user is logged in with call the UserId and GenerateToken using API$/, async function(){

    let token = await generateToken.token
    let userId = await responseBodyReturn.userID


  // if(!endpointRef) throw new Error(`Given endpoint ref: ${endpointRef} is not valid`);
  
  try {
    // get payload data
    let testid= this.testid
    let endpoint = userId
    
    let req
    await browser.call(async function () {
      //@ts-ignore
      req =await apiHelper.GET(testid, browser.options.getUser, endpoint, token)
    })

    // store results
    // let data = JSON.stringify(req.body)
    // let filename= `${process.cwd()}/data/api-res/requestAPIUsers.json`
    // fs.writeFileSync(filename, data)
    reporter.addStep(testid, "info",`User login with userId: ${userId} stored in json file`) 
  } catch (err) {
      err.message = `${this.testid}: Failed login with the userId getting API users from jsonfile ${err.message}`
      throw err
  }

//   console.log(`--------------------------`)
//         let filename= `${process.cwd()}/data/api-res/requestAPIUsers.json`
//         let data =  fs.readFileSync(filename, "utf8")
//         let dataObj= JSON.parse(data)
//         console.log(`Api data:${data}`)

   
     await browser.debug()
 })

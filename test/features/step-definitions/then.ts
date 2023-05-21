import { Then, When } from "@wdio/cucumber-framework";
import chai from "chai";
import homeBookStorePage from "../../page-objects/homeBookStore.page";
import bookDetailsPage from "../../page-objects/bookDetails.page";
import fetch from 'node-fetch';
import generateToken from "../../../data/api-res/Account/GenerateTokenAPIByPost.json"
import responseBodyReturn from "../../../data/api-res/Account/ResponseBodyReturn.json"
import fs from "fs";
import reporter from "../../helper/reporter";
import apiHelper from "../../helper/apiHelper";
import responseBodyAfterLoginByUI from "../../../data/api-res/Book/ResponseBodyAfterLoginByUI.json"
import profilePage from "../../page-objects/profile.Page";
import elementsPage from "../../page-objects/Element/elements.page";
import elementsHomePage from "../../page-objects/Element/elementsHome.page";

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
    await browser.pause(1000)
    // await browser.debug()
})

Then(/^Verify that the user is at Login page$/, async function(){
    console.log(`--------------`)   
    let username = await homeBookStorePage.getUserNameLabel + await homeBookStorePage.getUserNameValue
    console.log(username)
    console.log(`--------------`)
    // await browser.debug()
})


Then(/^Verify that the books shows in the table pagination (.*)$/, async function(nameofBook){
  await browser.scroll(0, 400);
  await profilePage.getAllitemsBookstore(this.testid,nameofBook)

  await browser.debug()
})

Then(/^Get the value of the book and verify it$/, async function(){

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
    let data = JSON.stringify(req.body)
    let filename= `${process.cwd()}/data/api-res/Account/ResponseBodyAfterDeleteAccount.json`
    fs.writeFileSync(filename, data)
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

   await browser.pause(1000)
    //  await browser.debug()
 })



Then(/^Verify the book (.*) after user deleled$/, async function(titleBook){
  console.log(`after deleted book`)

  console.log(`--------------------------`);
    let fileToken = `${process.cwd()}/data/api-res/Book/ResponseBodyAfterLoginByUI.json`;
    let infoToken = await profilePage.readFileWithCallback(fileToken);
    let readToken = JSON.parse(infoToken);
    // console.log(`Books data:${data}`)
    let token = readToken.token;
  console.log(token)
  console.log(`--------------------------`);

    let fileAccount = `${process.cwd()}/data/api-res/Book/ResponseBodyAfterLoginByUI.json`;
    // let infoUserRead =  fs.readFileSync(fileAccount, "utf8")
    let infoUserRead = await profilePage.readFileWithCallback(fileAccount);

    let readUserid = JSON.parse(infoUserRead);

    // console.log(`Books data:${data}`)
    let userid = readUserid.userId;
    console.log(`-------------1-------------`);

    console.log(userid);

  // if(!endpointRef) throw new Error(`Given endpoint ref: ${endpointRef} is not valid`);

  try {
    // get payload data
    let testid = this.testid;
    let endpoint = userid;

    let req;
    await browser.call(async function () {
      //@ts-ignore
      req = await apiHelper.GET(testid,browser.options.getUser,
        endpoint,token
      );
    });
    let data = JSON.stringify(req.body)
    let filename= `${process.cwd()}/data/api-res/Book/allInfoAndBooksAfterDeleteBook.json`
    await profilePage.writeFileWithCallback(filename, data)
    reporter.addStep(
      testid,
      "info",
      `Get userId: ${userid} stored in json file after deleted book`
    );
  } catch (err) {
    err.message = `${this.testid}: Failed login with the userId getting API users from jsonfile ${err.message}`;
    throw err;
  }

  
 // get payload data
 console.log(`--------------------------`);
 let fileallBook = `${process.cwd()}/data/api-res/Book/allInfoAndBooksAfterDeleteBook.json`;
 let allBooks = await profilePage.readFileWithCallback(fileallBook);
 let dataAllBook = JSON.parse(allBooks);
 // console.log(`Books data:${data}`)
 let databook = dataAllBook.books.find((book) => book.title === titleBook);
 let isbn;

 if (databook) {
   console.log(`-------------1-------------`);
   console.log(databook);
   console.log(`--------------Book was not detele------------`);
 } else {
   console.log(`No book found with the title "${titleBook}". The book was deleted`);
 }
 // console.log(dataAllBook.books.find())


  await browser.debug();

 
  
})
 

 Then(/^Check the user was deleted using APi$/, async function(){

  let token = await generateToken.token
    let userId = await responseBodyReturn.userID
  try {
    // get payload data
    let testid= this.testid
    let endpoint = userId
    
    let req
    await browser.call(async function () {
      //@ts-ignore
      req =await apiHelper.GET(testid, browser.options.getUser, endpoint, token)
    })

    let data = JSON.stringify(req.body)
    let filename= `${process.cwd()}/data/api-res/Account/CheckMessageAfterDeleteAccountAndLoginAgain.json`
    fs.writeFileSync(filename, data)
    reporter.addStep(testid, "info",`Can not login with userId: ${endpoint} stored in  json file`) 
  } catch (err) {
      err.message = `${this.testid}: Failed loggin with account getting API users from reqres ${err.message}`
      throw err
  }
   
   await browser.debug()
})
 
When(/^Verify that the book (.*) is deleted$/, async function (title) {
  
  await profilePage.getDeleteButtonByTitleAfterDele(this.testid,title)
  // await browser.debug()
})
When(/^Verify that the value after click submit button$/, async function () {
  
  await elementsHomePage.clickSubmit()
  await browser.pause(1000)
  await elementsHomePage.getValueAfterClick()
 
  await browser.debug()
})


When(/^User clicks on (.*) button to check on or off$/, async function (expandOrCollapse) {
  
  console.log(`user clicks on ${expandOrCollapse} button`)
  await elementsHomePage.clickExpandBtn()
  await browser.pause(5000)
  await elementsHomePage.clickCollapseBtn()

  
  await browser.debug();
  
});

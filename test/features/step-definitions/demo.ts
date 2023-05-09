import { Given, Then, When } from "@wdio/cucumber-framework";
import chai from "chai";
Given(/^Google page is opened$/, async function () {
  // console.log(`------------Before opening browser...`);
  await browser.url("http://www.google.com");
  await browser.pause(3000);
  // console.log(`------------After opening browser...`);
});

When(/^Search with (.*)$/, async function (searchItem) {
  // console.log(`---------Search Item: ${searchItem}`);
  let ele = await $(`[name='q']`);
  await ele.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on the first search result$/, async function () {
  let ele = await $(`<h3>`);
  await ele.click();
  await browser.pause(3000);
});

Then(/^URL should match (.*)$/, async function (ExpectedURL) {
  // console.log(`---------Expected URL: ${ExpectedURL}`);
  let getUrl = await browser.getUrl();
  chai.expect(getUrl).to.equal(ExpectedURL);
});



Given(/^A web page is opened$/, async function () {
  await browser.url("/frames");
  //   await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  //   await browser.maximizeWindow();
});


When(/^Perform web interaction$/, async function () {
  // -----------------input-----------------
  /*  let num = 123456789
    let strNum = num.toString()
    let ele= await $(`[type=number]`)
    await ele.click()
    // await ele.setValue(num)
    for(let i = 0; i < strNum.length; i++){
        let charStr = strNum[i]
        await browser.pause(1000)
        await browser.keys(charStr)
    } */

  // -----------------dropdown-----------------

  /*  let ele = await $('//select/option[@selected="selected"]')
    let val = await ele.getText()
    chai.expect(val).to.equal("Please select an option")

    let ddele =  await $('#dropdown')
    await ddele.selectByAttribute("value","1")

    let ele= await $$(`select > option`)
    let arr = []
    for(let i=0; i< ele.length; i++){
        let eleach = ele[i]
        let val = await eleach.getText()
        console.log(`----------${val}`)
        arr.push(val)
    }
    console.log(`---------- list data: ${arr}`) */

  // -----------------checkboxes-----------------

  /* // let ele = await $$(`//form[@id="checkboxes"]/input`)
  let eleArr = await $$(`//form[@id="checkboxes"]/input`);

  // await ele.click()
  // if(!await ele.isSelected()){
  //     await ele.click()
  // }

  for (let i = 0; i < eleArr.length; i++) {
    let ele = eleArr[i];
    if (!(await ele.isSelected())) {
      await ele.click();
    }
  } */

  // -----------------windowns handling-----------------

  /*  windowns handling
  steps
    launch the browser
    open another windows
    switch to the window based on the title
    switch back to the main window

    methods used
        gettitle()
        getWindowHandle()
        getWindowHandles()
        switchTowindow()
  */

  /*  await $(`=Click Here`).click();
  await $(`=Elemental Selenium`).click();
  let currentWinTitle = await browser.getTitle();
  let parentWinHandle = await browser.getWindowHandle();

  console.log(`----------currentWinTitle: ${currentWinTitle}`);

  // switch to specific window
  let winHandles = await browser.getWindowHandles();
  for (let i = 0; i < winHandles.length; i++) {
    console.log(`--------- win hanlde: ${winHandles[i]}`);
    await browser.switchToWindow(winHandles[i]);
    currentWinTitle = await browser.getTitle();
    await browser.pause(2000);
    if (
      currentWinTitle ===
      "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"
    ) {
      await browser.switchToWindow(winHandles[i]);
      await browser.pause(2000);
      let headerTextElsSel = await $(`<h1>`).getText();
      console.log(`----------headerTextElsSel: ${headerTextElsSel}`);
    }
  }

  //switch back to parent window
  await browser.switchToWindow(parentWinHandle)
  let parentwinHeaderText = (await $(`<h3>`)).getText()
  console.log(`----------parentwinHeaderText: ${parentwinHeaderText}`) */

  // -----------------javascript_alerts-----------------

  /* let ele1= await $(`button=Click for JS Prompt`);
    await ele1.click();
    if(await browser.isAlertOpen()){
        // await browser.acceptAlert()
        // await ele1.dismissAlert()
        let alertText = await browser.getAlertText()
        await browser.sendAlertText("asdfasdfad")
        await browser.acceptAlert()

        await browser.pause(2000)
    }
    let result=  await $(`#result`).getText()
    console.log(`---------${result}`) */

  // -----------------file upload-----------------

  /* console.log(process.cwd())
  await $(`#file-upload`).addValue(`${process.cwd()}/data/fileUpload/dummy.txt`)
//   await ele.click()
  await $(`#file-submit`).click()
 */

  // -----------------Frame-----------------

  await $(`=iFrame`).click()
    let ele= await $(`#mce_0_ifr`)
    await browser.switchToFrame(ele)
    await $(`#tinymce`).click()
    let isCheck =  await $(`#tinymce > p`).getText()
    
    if((await isCheck.length >= 0)){
        await browser.keys(["Control", "A"]);
        await browser.keys(["Control", "C"]);
        await browser.keys("Delete");
        await browser.pause(1000)
        await $(`#tinymce`).setValue('Typing into a frame ...')

    }


  /* 
  // -----------------Basic scrolling-----------------

  Methods: (Element methods)
  1. srollIntoview
  2. 
  */

  // await $(`h3=Google Lighthouse Integration`).scrollIntoView();
  // await browser.pause(2000);

  await browser.debug(3000);
});
Then(/^URL should macth (.*)$/, async function (ExpectedURL) {
  console.log(`---------Expected URL: ${ExpectedURL}`);
  await browser.waitUntil(async function (){
    return await browser.getTitle()=== "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
  }, {timeout: 20000, interval: 500, timeoutMsg: "timeout"})
  let getUrl = await browser.getUrl();

  chai.expect(getUrl).to.equal(ExpectedURL);
});
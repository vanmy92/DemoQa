import { When } from "@wdio/cucumber-framework";
import chai = require("chai");
import homePage from "../../page-objects/home.page";
import homeBookStorePage from "../../page-objects/homeBookStore.page";

When(/^User clicks on Book Store Application Button$/, async function () {
  await homePage.clickBookStoreApp()
  let nameheader = await homeBookStorePage.nameHeader()
  console.log(`------${nameheader}----------`)
  await browser.debug()
});














// When(/^User clicks on menu button$/, async function() {
//   await homePage.clickMenuBtn(this.testid);
//   // await homePage.clickLogoutBtn(this.testid);
//   await browser.debug()
// })

// When(
//   /^User want to show item have price (.*) (.*) dollars$/,
//   async function (condition,number) {
//     console.log(
//       `---------user want to show item have price ${condition} ${number} dollars`
//     );
//     console.log("---------------");
//     await homePage.getItemByPriceCondition_1(this.testid, condition, number);

//     await browser.debug();
//   }
// );

// When(
//   /^User want to add to cart all item have price (.*) (.*) dollars$/,
//   async function (condition,number) {
//     console.log(
//       `---------User want to add to cart all item have price ${condition} ${number} dollars`
//     );
//     console.log("---------------");
//     console.log("***************");
//     await homePage.getItemByPriceCondition_1(this.testid, condition, number);
//     await homePage.clickAddToCartByConditionPrice_1(this.testid, condition, number);
//     await browser.debug();
//   }
// );

// // When(
// //   /^User want to add to cart all item have price > (.*) dollars$/,
// //   async function (number) {
// //     console.log(
// //       `---------User want to add to cart all item have price < ${number} dollars`
// //     );
// //     console.log("---------------");
// //     console.log("***************");
// //     await homePage.getItemByPriceCondition(this.testid, number);
// //     await homePage.clickAddToCartByConditionPrice(this.testid, number);
// //     await browser.debug();
// //   }
// // );

// // When(/^User clicks on (.*) Add to cart$/, async function (indexOfItem) {
// //   console.log(`-------   user clicks on the cart: ${indexOfItem} `);
// //   let b= await homePage.indexOfNumberItem(this.testid);
// //   console.log(`--- index of item: ${b}`)
// //   await homePage.getDataItemByIndex(this.testid, indexOfItem);
// //   // console.log(`------- the value of the index after user clicked add to cart: ${a} `)

// //   let a = await homePage.listTitleName(this.testid)
// //   console.log(a)
// //   // await homePage.clickAddtoCarts(this.testid, indexOfItem);
// //   await browser.debug();
// // });










// When(/^User clicks on (.*) Add to cart$/, async function (nameOfItem) {
//   // await homePage.getDataItemByIndex(this.testid, nameOfItem);
//   console.log(`==========`)
//   console.log(`----------   user clicks on ${nameOfItem} cart  `);
//   await homePage.clickOnceItemAddToCartByTitleName(this.testid, nameOfItem);
//   await browser.debug();
// });



// When(/^User randomly clicks (.*) Add to Cart$/, async function (randomItem) {
//   let getAllitem = await homePage.allItemsCart.length;
//   console.log(`  ------- the number of all item cart: ${getAllitem}`);
//   let addAddtoCart = await homePage.addToCartButtons.length;
//   console.log(
//     `  ------- the number of all button Add to cart: ${addAddtoCart}`
//   );

//   console.log(`------- user want to add more ${randomItem} cart`);

//   let nums = [];
//   if(randomItem <= 0 || randomItem > getAllitem ){
//     console.log(`------ user need to enter a valid number ------`)
//     return;
//   }else{
//     while (nums.length < randomItem) {
//       let randomIndex = Math.floor(Math.random() * getAllitem); // 6 -> 0,1,2,3,4,5
//       if (!nums.includes(randomIndex)) {
//         nums.push(randomIndex);
//         console.log(` --- click button :${randomIndex}`);
//         await homePage.clickAddtoCarts(this.testid, randomIndex);
//       }
//     }
//   }
 
//   console.log(nums);

//   await browser.debug();
// });

// When(/^User clicks on shopping cart button$/, async function () {
//   await homePage.clickShoppingCart(this.testid);
//   let a = await homePage.getNumberOfShoppingCart(this.testid);
//   console.log(`----number of shopping cart: ${a} -----`);
//   await browser.debug();
// });
// When(/^User clicks on Continue button$/, async function () {
//   await checkoutYourInfoPage.clickContinueBtn(this.testid);
//   let a = await homePage.getNumberOfShoppingCart(this.testid);
//   console.log(`----number of shopping cart: ${a} -----`);
//   await checkoutcomplete.checkNumberofShoppingCart(this.testid)
  
//   await browser.debug();
// });



// When(/^User clicks on finish button$/, async function () {

//   // let a =  await checkoutcomplete.checkNumberofShoppingCart(this.tesid)
//   // console.log(`----number of shopping cart: ${a}`);
//   let b=  await checkoutcomplete.getAllInforPage(this.testid)
//   console.log(b)
//   await checkoutcomplete.clickBackToHome(this.testid)
//   await browser.debug();
// });

// When(
//   /^User clicks on (.*) item to view detailed information$/,
//   async function (index) {
//     console.log(`----- user views item : ${index}`);
//     await homePage.clicktoViewOneItemByName(this.testid, index);
//     let oneitem = await oneItem.getAllInforItemCart(this.testid);
//     console.log(`------${oneitem}---`);
//     // await browser.debug()
//   }
// );

// When(/^User clicks on Add to Cart button$/, async function () {
//   console.log(`----- user click on Add to cart `);
//   await homePage.clickAddtoCart(this.testid);
//   await browser.debug();
// });

// When(/^User clicks on Back to Products button$/, async function () {
//   console.log(`----- user click on back to products to turn home page `);
//   await oneItem.clickBackToProductsBtn(this.testid);
//   await browser.debug();
// });

// When(/^User clicks on Checkout button$/, async function () {
//   console.log(`----- user click on Checkout button `);
//   await yourCart.clickCheckoutBtn(this.testid);
//   await browser.debug();
// });

// When(/^User clicks on the short button$/, async function () {
//   let short = await homePage.getValueShortButton(this.testid);
//   console.log(`----- The value of the short button: ${short}`);
//   await browser.debug()
// });
// When(/^Verify i click randomly the selected short options$/, async function () {
//   await homePage.selectRandomSelection(this.testid);
//   // await browser.debug()
// });
// When(/^Verify i click the select (.*) options$/, async function (nameofDropdown) {
//   // await homePage.clickShortButton(this.testid)
//   // await browser.debug()
//   // await homePage.selectbyIndexSelection(this.testid, index); 
//     // -- cux by index

//   // let short = await homePage.getValueShortButton(this.testid);
//   // console.log(`--- all value of short button: ${short}`);
  
//   // let short_2 = await homePage.getValueShortButton_2(this.testid);
//   // console.log(`--- all value of short button: ${short_2}`);
//   // console.log(`-----User clicks on ${nameofDropdown} in dropdown options`);
//   // let sortAtoZ = await homePage.sortnameAtoZ(this.testid);
//   // console.log(`------------value after sort---------`);
//   // console.log(sortAtoZ)
  
  
//   // console.log(`-----User clicks on ${nameofDropdown} in dropdown options`);
//   // let sortZtoA = await homePage.sortnameZtoA(this.testid);
//   // console.log(`------------value after sort---------`);
//   // console.log(sortZtoA)



//   //  await homePage.getAllDataByNamZtoA(this.testid, nameofDropdown);
//   //  await homePage.getAllDataByNamAtoZ(this.testid, nameofDropdown);

//  let a = await homePage.getAllValueOfSortDropDown(this.testid)
//  console.log(`------ all value of dropdown: ${a}`);
  
//  await homePage.clicksortdropdown(this.testid, nameofDropdown)

//   // await homePage.clickOnceItemDropDownByName(this.testid, nameofDropdown); 

//   await browser.debug();
// });


// When(/^Verify that user clicked on each item and click add to cart$/, async function () {
//   console.log(`----- ------------ `);
  
//   let a=  await homePage.numberofitems(this.testid);
//   console.log(a)
//   await homePage.clickAndAddEachItem(this.testid, a)

//   await browser.debug();
// });


// When(/^User clicks on the Rest App State$/, async function () {
//   await homePage.clickRestAppStateBtn(this.testid);
//   await browser.debug()
// });

// When(/^Verify the the item in the shopping cart after user rest app state$/, async function () {
//   let result = await homePage.getNumberOfShoppingCart(this.testid);
//   console.log(`the number of the shopping cart after user rest app state : ${result}`)

//   await browser.debug()
// });



// When(/^User clicks on All Items button$/, async function () {
//   await homePage.clickAllItemBtn(this.testid);
//   await browser.pause(3000) 
//   await browser.debug()
// });


// When(/^Verify the all item is not clicked after user rest app state$/, async function () {

//   let numberOfItems = await homePage.numberofitems(this.testid);
//   let numberOfButtonAddToCart = await homePage.numberofitems(this.testid);

//   if(numberOfItems ===numberOfButtonAddToCart){
//     console.log(`----- all items are back to original---`)
//   }

//   await browser.debug()
// });


// When(/^Verify the value page after user clicks on Price low to high button$/, async function () {

//   let numberPriceOfItems = await homePage.listPriceNameConvertNumber(this.testid)
//   console.log(`list number: ${numberPriceOfItems}`)
//   let a = await homePage.indexOfNumberByPriceLowToHighCondition(this.testid)
//   console.log(`---- the all list price items after user clicks on Price low to high button: ${a}`)
//   console.log(`-----------All the items after user clicks on Price low to high button------------`)
//   await homePage.getItemByPriceLowToHigh(this.testid)
//   await browser.debug()
// });


import { When } from "@wdio/cucumber-framework";
import chai = require("chai");
import homePage from "../../page-objects/home.page";
import homeBookStorePage from "../../page-objects/homeBookStore.page";
import bookDetailsPage from "../../page-objects/bookDetails.page";
import reporter from "../../helper/reporter";
import apiHelper from "../../helper/apiHelper";
import fs from "fs";
import loginPage from "../../page-objects/login.page";
import profilePage from "../../page-objects/profile.Page";
import userPass from "../../../data/userPass.json";
import postBook from "../../../data/postBooks.json";
import generateToken from "../../../data/api-res/Account/GenerateTokenAPIByPost.json";
import responseBodyReturn from "../../../data/api-res/Account/ResponseBodyReturn.json";
import { profile } from "winston";
// assert { type: "json" };

When(/^User clicks on Book Store Application Button$/, async function () {
  await homePage.clickBookStoreApp();
  let nameheader = await homeBookStorePage.nameHeader();
  console.log(`------${nameheader}----------`);
  await browser.debug();
});

When(
  /^User clicks on (.*) to view the details of the the book$/,
  async function (nameOfBook) {
    console.log(`==========`);
    console.log(
      `----------   user clicks on ${nameOfBook} to view the details of the book`
    );
    await homeBookStorePage.clickOnceItemAddToCartByTitleName(
      this.testid,
      nameOfBook
    );
    // await browser.debug()
  }
);

When(/^User clicks on Login button in Book Store Page$/, async function () {
  await homeBookStorePage.clickLogin();
  try {
    //@ts-ignore
    // await loginPage.navigateTo(browser.options.sauseDemoURL);
    await loginPage.loginToBookStoreApp(
      this.testid,
      process.env.TEST_STD_USERNAME,
      process.env.TEST_STD_PASSWORD
    );
  } catch (err) {
    err.message = `Failed to login to saucedemo: ${err.message}`;
    throw err;
  }

  await browser.pause(1000);
  await homeBookStorePage.clickLogin();
  await browser.pause(3000);

  try {
    // get payload data
    let testid = this.testid;
    let endpoint = "";
    let authentication = "";
    let req;
    await browser.call(async function () {
      //@ts-ignore
      req = await apiHelper.POST(testid,browser.options.postLogin,endpoint,authentication,userPass
      );
    });

    // let data = JSON.stringify(req.body)
    console.log(req);
    let filename = `${process.cwd()}/data/api-res/Book/ResponseBodyAfterLoginByUI.json`;
    fs.writeFileSync(filename, req);
    // await profilePage.writeFileWithCallback(filename,data)
    reporter.addStep(
      testid,
      "info",
      `Api response from book id: ${endpoint} stored in  json file`
    );
  } catch (err) {
    err.message = `${this.testid}: Failed at getting API users from reqres ${err.message}`;
    throw err;
  }

  // await browser.debug()
});

When(/^Get value (.*) book$/, async function () {
  try {
    // get payload data
    let testid = this.testid;
    let endpoint = "";
    let authentication = "";
    let req;
    await browser.call(async function () {
      //@ts-ignore
      req = await apiHelper.GET(testid,browser.options.postLogin,endpoint,authentication,userPass
      );
    });

    // let data = JSON.stringify(req.body)
    console.log(req);
    let filename = `${process.cwd()}/data/api-res/Book/ResponseBodyAfterLoginByUI.json`;
    fs.writeFileSync(filename, req);
    // await profilePage.writeFileWithCallback(filename,data)
    reporter.addStep(
      testid,
      "info",
      `Api response from book id: ${endpoint} stored in  json file`
    );
  } catch (err) {
    err.message = `${this.testid}: Failed at getting API users from reqres ${err.message}`;
    throw err;
  }
});

When(
  /^Verify get the value of the (.*) book by call api$/,
  async function (nameOfBook) {
    let idBook = await bookDetailsPage.getIdBookAfterClickBook(
      this.testid,
      nameOfBook
    );
    console.log(`----------------------------book id:`);
    console.log(idBook);

    // if(!endpointRef) throw new Error(`Given endpoint ref: ${endpointRef} is not valid`);

    try {
      // get payload data
      let testid = this.testid;

      let endpoint = idBook;

      let req;
      await browser.call(async function () {
        //@ts-ignore
        req = await apiHelper.GET(testid,browser.options.bookStoreBaseURL,
          endpoint,
          ""
        );
      });

      // store results
      let data = JSON.stringify(req.body);
      let filename = `${process.cwd()}/data/api-res/requestAPIUsers.json`;
      await profilePage.writeFileWithCallback(filename, data);
      // fs.writeFileSync(filename, data)
      reporter.addStep(
        testid,
        "info",
        `Api response from book id: ${endpoint} stored in  json file`
      );
    } catch (err) {
      err.message = `${this.testid}: Failed at getting API users from reqres ${err.message}`;
      throw err;
    }

    console.log(`--------------------------`);
    let filename = `${process.cwd()}/data/api-res/requestAPIUsers.json`;
    let data = await profilePage.readFileWithCallback(filename);
    let dataObj = JSON.parse(data);
    console.log(`Api data:${data}`);
  }
);

When(/^Verify get all the value of the book by call api$/, async function () {
  console.log(`----------------------------`);

  try {
    // get payload data
    let testid = this.testid;

    let endpoint;

    let req;
    await browser.call(async function () {
      let number;
      //@ts-ignore
      let url = browser.options.bookStoreBaseURL + "?ISBN=" + number;
      //@ts-ignore
      req = await apiHelper.GET(testid,browser.options.bookStoreBaseURL,
        endpoint,
        ""
      );
    });

    let data = JSON.stringify(req.body);
    let filename = `${process.cwd()}/data/api-res/requestAPIUsers.json`;
    fs.writeFileSync(filename, data);
    reporter.addStep(
      testid,
      "info",
      `Api response from book id: ${endpoint} stored in  json file`
    );
  } catch (err) {
    err.message = `${this.testid}: Failed at getting API users from reqres ${err.message}`;
    throw err;
  }

  console.log(`--------------------------`);
  let filename = `${process.cwd()}/data/api-res/requestAPIUsers.json`;
  let data = await profilePage.readFileWithCallback(filename);
  let dataObj = JSON.parse(data);
  console.log(`Api data:${data}`);
});

When(/^Get the GenerateToken user is logged in$/, async function () {
  console.log(`----------------------------`);
  let req;
  try {
    let testid = this.testid;
    let endpoint;

    await browser.call(async function () {
      let endpoint = "GenerateToken";
      //@ts-ignore
      req = await apiHelper.POST(testid,browser.options.getGenerateToken,
        endpoint,
        userPass
      );
    });
  } catch (err) {
    err.message = `${this.testid}: Failed at getting API users from reqres ${err.message}`;
    throw err;
  }
  console.log(`Get the GenerateToken user is logged in`);
  console.log(req);

  await browser.pause(3000);
  // await browser.debug()
});

When(/^Get all information of user by the GenerateToken$/, async function () {
  let filename = `${process.cwd()}/data/api-res/Account/GenerateTokenAPIByPost.json`;
  let data = await profilePage.readFileWithCallback(filename);
  const jsonData = JSON.parse(data);
  console.log(`Api data:${data}`);
  const token = jsonData.token;
  console.log(token);
  try {
    let testid = this.testid;

    let endpoint;

    let req;
    await browser.call(async function () {
      //@ts-ignore
      req = await apiHelper.GET(testid,browser.options.bookStoreBaseURL,endpoint,""
      );
    });
    // @ts-ignore
    // if(req.status !== 200) chai.expect.fail(`Failed getting  users from : ${browser.options.bookStoreBaseURL}/${endpoint}`)
    // reporter.addStep(this.testid, "debug",`Api response received, data: ${JSON.stringify(req.body)}`)

    // store results
    let data = JSON.stringify(req.body);
    let filename = `${process.cwd()}/data/api-res/requestAPIUsers.json`;
    fs.writeFileSync(filename, data);
    reporter.addStep(
      testid,
      "info",
      `Api response from book id: ${endpoint} stored in  json file`
    );
  } catch (err) {
    err.message = `${this.testid}: Failed at getting API users from reqres ${err.message}`;
    throw err;
  }

  await browser.debug();
});

When(/^User creates a valid account using API$/, async function () {
  console.log(`----------------------------`);
  let req;
  console.log(`--------------------------`);
  let fileToken = `${process.cwd()}/data/api-res/Account/GenerateTokenAPIByPost.json`;
  let infoToken = await profilePage.readFileWithCallback(fileToken);
  let readToken = JSON.parse(infoToken);
  // console.log(`Books data:${data}`)
  let token = readToken.token;
  console.log(`-------------3-------------`);

  console.log(token);
  console.log(`--------------4------------`);
  try {
    let testid = this.testid;
    await browser.call(async function () {
      let endpoint = "";
      //@ts-ignore
      req = await apiHelper.POST(testid, browser.options.postUser,endpoint,
        token,
        userPass
      );

      // Extract the response body from the req object
    });
  } catch (err) {
    err.message = `${this.testid}: Failed at getting API users from reqres ${err.message}`;
    throw err;
  }
  // await browser.pause(5000)
  // await browser.acceptAlert();
  console.log(`----------------------------`);
  const data = req;
  let filename = `${process.cwd()}/data/api-res/Account/ResponseBodyReturn.json`;
  fs.writeFileSync(filename, data);
  console.log(`User creates a valid account using API`);
  await browser.pause(2000);
  await browser.debug();
});

When(/^User clicks on Add to Your Collection button$/, async function () {
  await bookDetailsPage.clickAddToYourCollection();
  await browser.pause(1000);
  console.log(`----------------------`);
  console.log(`-----------User clicks Add To Your Collection----------`);
  let textPopup = await bookDetailsPage.acceptPopupAddBook();
  console.log(textPopup);
  await browser.debug();
});

When(/^User clicks on Back To Book Store button$/, async function () {
  await bookDetailsPage.clickBackToBookStoreAfterLogin();
  await browser.debug();
});

When(/^User clicks on Profile button$/, async function () {
  await profilePage.clickProfileButton();
  await browser.debug();
});
When(/^User clicks on New User Button$/, async function () {
  await loginPage.clickNewUser();
  await browser.debug();
});

When(/^User wants to delete the account using Api$/, async function () {
  let token = await generateToken.token;
  let userId = await responseBodyReturn.userID;

  // if(!endpointRef) throw new Error(`Given endpoint ref: ${endpointRef} is not valid`);

  try {
    // get payload data
    let testid = this.testid;
    let endpoint = userId;

    let req;
    await browser.call(async function () {
      //@ts-ignore
      req = await apiHelper.GET(testid,browser.options.getUser,
        endpoint,
        token
      );
    });
    reporter.addStep(
      testid,
      "info",
      `Delete userId: ${userId} stored in json file`
    );
  } catch (err) {
    err.message = `${this.testid}: Failed login with the userId getting API users from jsonfile ${err.message}`;
    throw err;
  }

  //   console.log(`--------------------------`)
  //         let filename= `${process.cwd()}/data/api-res/requestAPIUsers.json`
  //         let data =  fs.readFileSync(filename, "utf8")
  //         let dataObj= JSON.parse(data)
  //         console.log(`Api data:${data}`)

  await browser.debug();
});

When(/^Get all books$/, async function () {
  try {
    // get payload data

    let testid = this.testid;
    let endpoint = "";
    let req;
    await browser.call(async function () {
      //@ts-ignore
      req = await apiHelper.GET(testid,browser.options.getAllBooks,endpoint,
        ""
      );
    });

    // store results
    let data = JSON.stringify(req.body);
    let filename = `${process.cwd()}/data/api-res/Book/allBook.json`;
    await profilePage.writeFileWithCallback(filename, data);
    // fs.writeFileSync(filename, data)
    reporter.addStep(
      testid,
      "info",
      `Api response get all data books stored in json file`
    );
  } catch (err) {
    err.message = `${this.testid}: Failed at getting all data books from reqres ${err.message}`;
    throw err;
  }

  console.log(`--------------------------`);
  let filename = `${process.cwd()}/data/api-res/Book/allBook.json`;
  let data = await profilePage.readFileWithCallback(filename);
  let dataObj = JSON.parse(data);
  console.log(`Books data:${data}`);
  await browser.pause(1000)
  // await browser.debug();
});

When(/^Get all the value of (.*) book$/, async function (titleBook) {
  try {
    // get payload data
    console.log(`--------------------------`);
    let fileallBook = `${process.cwd()}/data/api-res/Book/allBook.json`;
    let allBooks = await profilePage.readFileWithCallback(fileallBook);
    let dataAllBook = JSON.parse(allBooks);
    // console.log(`Books data:${data}`)
    let databook = dataAllBook.books.find((book) => book.title === titleBook);
    let isbn;

    if (databook) {
      console.log(`-------------1-------------`);
      console.log(databook);
      console.log(`--------------2------------`);
      isbn = await databook.isbn;
      console.log(isbn);
      console.log(`--------------3------------`);
    } else {
      console.log(`No book found with the title "${titleBook}".`);
    }
    // console.log(dataAllBook.books.find())

    let testid = this.testid;
    console.log(`--------------4------------`);
    let endpoint = isbn;
    console.log(endpoint);
    console.log(`--------------6------------`);
    let req;
    await browser.call(async function () {
      //@ts-ignore
      req = await apiHelper.GET(testid, browser.options.getBook, endpoint, "");
    });

    // store results
    let data = JSON.stringify(req.body);
    let filename = `${process.cwd()}/data/api-res/Book/book.json`;
    fs.writeFileSync(filename, data);
    reporter.addStep(
      testid,
      "info",
      `Api response get all data book stored in json file`
    );
  } catch (err) {
    err.message = `${this.testid}: Failed at getting all data book from reqres ${err.message}`;
    throw err;
  }
  console.log(`-------Data api return and put into folder`);
  let getbookdt = `${process.cwd()}/data/api-res/Book/book.json`;
  let allBooksData = await profilePage.readFileWithCallback(getbookdt);
  let bookdata = JSON.parse(allBooksData);
  console.log(`Books data:${bookdata}`);
  await browser.pause(1000)
  // await browser.debug();
});

When(/^User post a new book$/, async function (titleBook) {
  try {
    console.log(`--------------------------`);
    let fileAccount = `${process.cwd()}/data/api-res/Book/ResponseBodyAfterLoginByUI.json`;
    // let infoUserRead =  fs.readFileSync(fileAccount, "utf8")
    let infoUserRead = await profilePage.readFileWithCallback(fileAccount);

    let readUserid = JSON.parse(infoUserRead);

    // console.log(`Books data:${data}`)
    let userid = readUserid.userId;
    let isbn;
    console.log(`-------------1-------------`);

    console.log(userid);
    console.log(`--------------2------------`);
    console.log(`--------------------------`);
    let fileToken = `${process.cwd()}/data/api-res/Book/ResponseBodyAfterLoginByUI.json`;
    let infoToken = await profilePage.readFileWithCallback(fileToken);
    let readToken = JSON.parse(infoToken);
    // console.log(`Books data:${data}`)
    let token = readToken.token;

    console.log(`-------------3-------------`);

    console.log(token);
    console.log(`--------------4------------`);

    console.log(`--------------4------------`);
    let endpoint = "";
    console.log(endpoint);
    console.log(`--------------6------------`);
    let req;
    let testid = this.testid;

    let bookData = {
      "userId": userid,
      "collectionOfIsbns": [
        {
          "isbn": "9781449325862"
        }
      ]
    }
    let data = JSON.stringify(bookData)
    console.log(data)
    await browser.call(async function () {
      //@ts-ignore
      req = await apiHelper.POST(testid,browser.options.getAllBooks,endpoint,token,postBook);
    });
    reporter.addStep(
      testid,
      "info",
      `Api response POST data book stored in json file`
    );
  } catch (err) {
    err.message = `${this.testid}: Failed at getting POST data book from reqres ${err.message}`;
    throw err;
  }
  await browser.debug();
});

When(/^User clicks on Go To Book Store button$/, async function () {
  await profilePage.clickGoToBookStoreButton();
  await browser.debug();
});
When(
  /^Verify that user clicked on each item and clicks on Add To Your Collection button$/,
  async function () {
    let numberofBookStores = await homeBookStorePage.allNumberofItems();
    console.log(`------ the number of book stores: ${numberofBookStores}`);

    await homeBookStorePage.clicksOnBookAndAddToYourCollection(
      this.testid,
      numberofBookStores
    );

    await browser.debug();
  }
);

When(
  /^User wants to see the all the items of the dropdowns$/,
  async function () {
    let numberofDropdowns = await profilePage.getNumberofDropDowns();
    console.log(`------ the number of dropdowns: ${numberofDropdowns}`);

    let dataOfDropdowns = await profilePage.getAllValueOfDropdowns();
    console.log(`----------------`);
    console.log(dataOfDropdowns);

    await browser.debug();
  }
);

When(
  /^User clicks on the Next button to view the next books$/,
  async function () {
    console.log(`-----------1--------------`);
    let numberofPage = await profilePage.getValueOfPageNum();
    console.log(numberofPage);
    console.log(`-----------2--------------`);
    await browser.scroll(0, 400);
    await browser.pause(1000);
    await profilePage.getSelectedOption();
    let dropdownBefore = await profilePage.getSelectedOption();
    console.log(
      `---------value of the selected dropdown selection: ${dropdownBefore}`
    );
    console.log(`-----------3--------------`);
    let numberofPageOF = await profilePage.getValueOfPageNumOf();
    console.log(numberofPageOF);
    await profilePage.clickNextButton();
    let dropdownAfterClickNextBtn = await profilePage.getSelectedOption();
    console.log(
      `---------value of the selected dropdown selection: ${dropdownAfterClickNextBtn}`
    );
    console.log(`-----------4--------------`);
    let numberofBookStoresinNexPage =
      await homeBookStorePage.allNumberofItems();
    console.log(
      `------ the number of book stores in Next Page: ${numberofBookStoresinNexPage}`
    );
    console.log(`-------------------------`);
    await homeBookStorePage.getAllDataOfItem_2(this.testid);

    await browser.debug();
  }
);

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

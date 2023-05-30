import { When } from "@wdio/cucumber-framework";
import chai = require("chai");
import homePage from "../../page-objects/Books/home.page";
import homeBookStorePage from "../../page-objects/Books/homeBookStore.page";
import bookDetailsPage from "../../page-objects/Books/bookDetails.page";
import reporter from "../../helper/reporter";
import apiHelper from "../../helper/apiHelper";
import fs from "fs";
import loginPage from "../../page-objects/Books/login.page";
import profilePage from "../../page-objects/Books/profile.Page";
import userPass from "../../../data/userPass.json";
import postBook from "../../../data/postBooks.json";
import elementsPage from "../../page-objects/Element/elements.page";
import elementsHomePage from "../../page-objects/Element/elementsHome.page";
import generateToken from "../../../data/api-res/Account/GenerateTokenAPIByPost.json";
import responseBodyReturn from "../../../data/api-res/Account/ResponseBodyReturn.json";
import { profile } from "winston";
import webTablesPage from "../../page-objects/Element/WebTables/webTables.page";
// assert { type: "json" };
import popupAddItemPage from "../../page-objects/Element/WebTables/popupAddItem.page";
import findAndDeleteItemPage from "../../page-objects/Element/WebTables/findAndDeleteItem.page";
import searchPage from "../../page-objects/Element/SearchBox/search.Page";

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
/*
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
  */

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
  await browser.pause(1000)
  await profilePage.getDataBookInProfileBeforeDeleteBook(this.testid)
  await browser.pause(1000)
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
  await browser.debug();
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
  console.log(`Books all the value of data:${allBooksData}`);
  await browser.pause(1000)
  await browser.debug();
});

When(/^User post a new book (.*)$/, async function (titleBook) {
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

    console.log(`-----------asdfasdf-------dele--------`);
    let fileallBook = `${process.cwd()}/data/api-res/Book/allBook.json`;
    let allBooks = await profilePage.readFileWithCallback(fileallBook);
    let dataAllBook = JSON.parse(allBooks);
    console.log(`Books data 134124234:${allBooks}`)
    let databook = dataAllBook.books.find((book) => book.title === titleBook);

    if (databook) {
      console.log(`-------------1--asdf-----------`);
      console.log(databook);
      console.log(`--------------2---adsf---------`);
      isbn = await databook.isbn;
      console.log(isbn);
      console.log(`--------------3---asdf---------`);
    } else {
      console.log(`No book found with the title "${titleBook}".`);
    }

    let bookData = {
      "userId": userid,
      "collectionOfIsbns": [
        {
          "isbn": isbn
        }
      ]
    }
    await browser.call(async function () {
      //@ts-ignore
      req = await apiHelper.POST(testid,browser.options.getAllBooks,endpoint,token,postBook);
    });

    let file = `${process.cwd()}/data/api-res/Book/bookPOST.json`
    let data = JSON.stringify(req)
    await profilePage.writeFileWithCallback(file,data)
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



When(/^User want to update the book$/, async function () {
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
    let endpoint = "9781449331818";
    console.log(endpoint);
    console.log(`--------------6------------`);
    let req;
    let testid = this.testid;

    // console.log(`-----------asdfasdf-------dele--------`);
    // let fileallBook = `${process.cwd()}/data/api-res/Book/allBook.json`;
    // let allBooks = await profilePage.readFileWithCallback(fileallBook);
    // let dataAllBook = JSON.parse(allBooks);
    // console.log(`Books data 134124234:${allBooks}`)
    // let databook = dataAllBook.books.find((book) => book.title === titleBook);

    // if (databook) {
    //   console.log(`-------------1--asdf-----------`);
    //   console.log(databook);
    //   console.log(`--------------2---adsf---------`);
    //   isbn = await databook.isbn;
    //   console.log(isbn);
    //   console.log(`--------------3---asdf---------`);
    // } else {
    //   console.log(`No book found with the title "${titleBook}".`);
    // }

    let bookData = {
      "title": "asdf",
    "subtitle": "qwer",
  "author": "tinhte.vn",
  "publisher": "vn",
  "totalPages": 12415,
  "description": "no",
  "website": "tinhte.vn"
    }
    await browser.call(async function () {
      //@ts-ignore
      req = await apiHelper.PUT(testid,browser.options.putBook,endpoint,token,bookData);
    });

    // let file = `${process.cwd()}/data/api-res/Book/bookPOST.json`
    // let data = JSON.stringify(req)
    // await profilePage.writeFileWithCallback(file,data)
    reporter.addStep(
      testid,
      "info",
      `Api response PUT data book stored in json file`
    );
  } catch (err) {
    err.message = `${this.testid}: Failed at getting POST data book from reqres ${err.message}`;
    throw err;
  }
  await browser.debug();
});



When(/^User delete the (.*) book$/, async function (titleBook) {
  try {
    console.log(`--------------------------`);
    let fileAccount = `${process.cwd()}/data/api-res/Book/ResponseBodyAfterLoginByUI.json`;
    // let infoUserRead =  fs.readFileSync(fileAccount, "utf8")
    let infoUserRead = await profilePage.readFileWithCallback(fileAccount);

    let readUserid = JSON.parse(infoUserRead);

    // console.log(`Books data:${data}`)
    let userid = readUserid.userId;
    console.log(`-------------1-------------`);

    console.log(userid);
    console.log(`--------------2------------`);
    console.log(`--------------------------`);
    let fileToken = `${process.cwd()}/data/api-res/Book/ResponseBodyAfterLoginByUI.json`;
    let infoToken = await profilePage.readFileWithCallback(fileToken);
    let readToken = JSON.parse(infoToken);
    // console.log(`Books data:${data}`)
    let token = readToken.token;

    console.log(`-------------3---dele----------`);

    console.log(token);
    console.log(`--------------4-----dele-------`);

    console.log(`--------------4------dele------`);
    let endpoint = "";
    console.log(endpoint);
    console.log(`--------------5-----dele-------`);
    let req;
    let testid = this.testid;
    let isbn;
    


    console.log(`-----------asdfasdf-------dele--------`);
    let fileallBook = `${process.cwd()}/data/api-res/Book/allBook.json`;
    let allBooks = await profilePage.readFileWithCallback(fileallBook);
    let dataAllBook = JSON.parse(allBooks);
    console.log(`Books data 134124234:${allBooks}`)
    let databook = dataAllBook.books.find((book) => book.title === titleBook);

    if (databook) {
      console.log(`-------------1--asdf-----------`);
      console.log(databook);
      console.log(`--------------2---adsf---------`);
      isbn = await databook.isbn;
      console.log(isbn);
      console.log(`--------------3---asdf---------`);
    } else {
      console.log(`No book found with the title "${titleBook}".`);
    }

    
    // console.log(dataAllBook.books.find())
   let bookDelete = {
    "isbn": isbn,
    "userId": userid
}
    await browser.call(async function () {
      //@ts-ignore
      req = await apiHelper.DELETE(testid,browser.options.bookStoreBaseURL,endpoint,token,bookDelete);
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

When(/^User wants to delete the book (.*)$/, async function(nameOfBook) {
  
  let numberofBookStores = await homeBookStorePage.allNumberofItems()
  console.log(`------ the number of book stores: ${numberofBookStores}`)
  // await homeBookStorePage.getAllDataOfItem_2(this.testid)
  // let dataBookStores = await homeBookStorePage.getAllDataOfItem_2(this.testid)
  console.log(`---------1----------`)
  console.log(`User wants to delete the book: ${nameOfBook}`)
  let book = await profilePage.DeleteBookByTitleInUI(this.testid, nameOfBook);
  
  console.log(`-------------------`)




  // console.log(`-------------------`)
  // let getDelBookLocator = await homeBookStorePage.getDeleteButtonByTitle(this.testid, nameOfBook);
  // console.log(getDelBookLocator)



  await browser.debug()
})


When(/^User clicks on Text Box button$/, async function () {

  await elementsHomePage.clickTextBoxBtn()
  console.log(`a`)
  await browser.pause(1000)
  await elementsHomePage.setValueFullname()
  await browser.pause(1000)
  await elementsHomePage.setValueEmail()
  await browser.pause(1000)
  await elementsHomePage.setValueCurrentAddress()
  await browser.pause(1000)
  await elementsHomePage.setPermanentAddress()
  await browser.pause(1000)
  await browser.debug();
  // await browser.debug();

});

When(/^User clicks on (.*) button in Home page$/, async function (buttons) {

  if(buttons === "checkBox"){
    await elementsHomePage.clickCheckBoxBtn();
    await browser.pause(1000)
  }
  if(buttons === "Web Tables"){
    await elementsHomePage.clickWebTables();
    await browser.pause(1000)
  }
    // await elementsHomePage.clickCheckBoxBtn()
  // await browser.debug();

});

When(/^User clicks on the (.*) dropdown button$/, async function (options) {

  await elementsHomePage.clickDrowHome()
  await browser.pause(1000)
  if(await elementsHomePage.checkShowDesDocuDown()=== true){
    console.log(`Desktop, Ducuments, Downloads Dropdown is displayed`)
  }else{
    console.log(`Desktop, Ducuments, Downloads Dropdown is not displayed`)
  }
  
  if(options === "Desktop"){
    await elementsHomePage.clickDesktopOpen()
    console.log(`user clicked on Desktop dropdown button`)
    let checkShowAllDesktop = await elementsHomePage.checkShowDesktopDetail()
    if(checkShowAllDesktop === true){
    console.log(`the value to show is : ${await elementsHomePage.getNotes.getText()}, ${await elementsHomePage.getCommands.getText()}`)
    }else{
      console.log(`can not show the value of the desktop`)
    }
    await elementsHomePage.clickDesktopDropDown()
    await browser.pause(1000)
  }

    // await elementsHomePage.clickCheckBoxBtn()
  await browser.debug();

});
When(/^User clicks on Add button in web table$/, async function () {
  await webTablesPage.clickAddBtn()
  console.log(`user clicked on Add button in web table`)
  await browser.pause(1000)
})  

When(/^User clicks on Submit button$/, async function () {
  await popupAddItemPage.clickSubmit()
  console.log(`user clicked submit button`)
  await browser.debug()
})  
When(/^User wants to add a new item$/, async function(){
  await popupAddItemPage.setDefaultItem()
  await browser.pause(2000)
})


When(/^User wants to add a list new item$/, async function(){
  
  // await popupAddItemPage.setInputOneItems()
  await popupAddItemPage.enterMoreItems()

  await browser.pause(2000)
})

When(/^User wants to add a list new item by using CSV file$/, async function(){
  
  // await popupAddItemPage.setInputOneItems()
  await popupAddItemPage.read()

  await browser.pause(2000)
})




When(/^User clicks on Edit button of (.*) to edit an item$/, async function (item) {
  
  await findAndDeleteItemPage.findAndEditItem(item)

  await browser.debug();
  
});


When(/^User wants to find (.*) in the table$/, async function (nameFind) {
  
  await searchPage.searchItem(nameFind)

  await browser.debug();
  
});

When(/^User wants to find items in the table by reading json file$/, async function () {
  
  await searchPage.searchItemByJsonFile()
  // await browser.debug();
  await browser.pause(3000)
  
});

When(/^User wants to delete (.*) in the table$/, async function (nameFind) {
  
  await searchPage.searchAndDelete(nameFind)

  await browser.debug();
  
});
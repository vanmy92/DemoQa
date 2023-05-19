import { Options } from "@wdio/types";
import chai from "chai";
import Page from "./page";
import reporter from "../helper/reporter";
import homeBookStorePage from "./homeBookStore.page";
import fs from "fs";

class ProfilePage extends Page {
  constructor() {
    super();
  }

  get getProfileHeader() {
    return $(".main-header").getText();
  }
  get getProfileBtn() {
    return $(`//*[@class="accordion"]/div[6]/div/ul/li[3]`);
  }

  get getGotoBookStoreBtn() {
    return $(`#gotoStore`);
  }
  get getDeleteAccountBtn() {
    return $('//*[contains(text(),"Delete Account")]');
  }
  get getDeleteAllBooksBtn() {
    return $('//*[contains(text(),"Delete All Books")]');
  }
  get getloginBtn() {
    return $(`#login`);
  }
  get getNewUserBtn() {
    return $(`#newUser`);
  }
  get getErrorUserAndPass() {
    return $(`#name`);
  }
  get previousBtn() {
    return $(`button=Previous`);
  }
  get nextBtn() {
    return $(`.-next button`);
  }
  async clickNextButton() {
    await this.click(await this.nextBtn);
  }

  async getValueOfPageNum() {
    return (await $(`//input[@aria-label="jump to page"]`)).getValue();
  }
  async getValueOfPageNumOf() {
    return await $(`//*[@class="-totalPages"]`).getText();
  }

  // async alltitle(){
  //   // console.log(await this.title)
  //   const output = [];
  //   const ele1 = await this.title.length;
  //   for (let i = 0; i < ele1; i++) {
  //     const element = await this.title[i];
  //     console.log(element)
  //     console.log(`-`)
  //     const title = await element.$(`//*[@class="rt-tr-group"]/div/div[2]/div`).getText();
  //     console.log(title)
  //     console.log(`2`)
  //     output.push({ title});
  //   }
  //   return output;
  // }

  get getTitle(){
    return $$(`.mr-2 > a`)
  }
  get getAuthor() {
    return $$(`//*[@class="rt-tr-group"]//div[3]`);
  }
  get getPublisher() {
    return $$(`//*[@class="rt-tr-group"]//div[4]`);
  }
  get getAllnumberofItems() {
    return $$(`.mr-2 > a`);
  }
  async allNumberofItems() {
    let result = await this.getAllnumberofItems.length;
    return result;
  }

  async getDataBookInProfileBeforeDeleteBook(testid: string) {
    const items = [];
    // Loop through the name elements and create a new item object for each one
    let a = await this.allNumberofItems();
    let titles = await this.getTitle;
    let authors = await this.getAuthor;
    let publishers = await this.getPublisher;
    for (let i = 0; i < a; i++) {
      const nameElement = titles[i];
      const descElement = authors[i];
      const priceElement = publishers[i];
      const item = {
        Title: await nameElement.getText(),
        Author: await descElement.getText(),
        Publisher: await priceElement.getText(),
      };
      console.log(item);
      items.push(item);
    }
    let fileBook = `${process.cwd()}/data/api-res/BookUIRes/allbookInProFileBeforeDelete.json`;
    let data = JSON.stringify(items)
    await this.writeFileWithCallback(fileBook, data)
    return items;
  }

  async getDataBookInProfileAfterDeleteBook(testid: string) {
    const items = [];
    // Loop through the name elements and create a new item object for each one
    let a = await this.allNumberofItems();
    let titles = await this.getTitle;
    let authors = await this.getAuthor;
    let publishers = await this.getPublisher;
    for (let i = 0; i < a; i++) {
      const nameElement = titles[i];
      const descElement = authors[i];
      const priceElement = publishers[i];
      const item = {
        Title: await nameElement.getText(),
        Author: await descElement.getText(),
        Publisher: await priceElement.getText(),
      };
      console.log(item);
      items.push(item);
    }
    let fileBook = `${process.cwd()}/data/api-res/BookUIRes/allbookInProFileAfterDelete.json`;
    let data = JSON.stringify(items)
    await this.writeFileWithCallback(fileBook, data)
    return items;
  }


  async getDataBookInProfileBookPagi2(testid: string) {
    const items = [];
    // Loop through the name elements and create a new item object for each one
    let a = await this.allNumberofItems();
    let titles = await this.getTitle;
    let authors = await this.getAuthor;
    let publishers = await this.getPublisher;
    for (let i = 0; i < a; i++) {
      const nameElement = titles[i];
      const descElement = authors[i];
      const priceElement = publishers[i];
      const item = {
        Title: await nameElement.getText(),
        Author: await descElement.getText(),
        Publisher: await priceElement.getText(),
      };
      console.log(item);
      items.push(item);
    }
    let fileBook = `${process.cwd()}/data/api-res/BookUIRes/allbookInProFileAfterClickNextBtn.json`;
    let data = JSON.stringify(items)
    await this.writeFileWithCallback(fileBook, data)
    return items;
  }

  get deleteBtns() {
    return $(`.rt-td:last-child > div.action-buttons > span`);
  }
  async clickDeleteButton() {
    await this.click(await this.deleteBtns);
  }
  get bookRows() {
    return $$(".rt-tr-group");
  }

  get title() {
    return $$(`//*[@class="rt-tr-group"]`);
  }

 

  get modal() {
    return $('.modal[aria-modal="true"]');
  }

  get titleAlert() {
    return this.modal.$('.modal-title');
  }

  get message() {
    return this.modal.$('.modal-body');
  }

  get okButton() {
    return this.modal.$('#closeSmallModal-ok');
  }

  get cancelButton() {
    return this.modal.$('#closeSmallModal-cancel');
  }

  
  

 

  async clickOkButton() {
    await this.click(await this.okButton);
  }

  async clickCancelButton() {
    await this.click(await this.cancelButton);
  }

  

  async getDeleteButtonByTitleBeforeDele(testid: string, title: string) {
    
    console.log(`-------------------`);
   

// "//a[text()='Learning JavaScript Design Patterns']/../../../..//span[@id='delete-record-undefined']"
// "//a[text()='Learning JavaScript Design Patterns']/../../../..//span[@id='delete-record-undefined']"


      console.log(`-`);
      let data = await this.getDataBookInProfileBeforeDeleteBook(testid);
      let book = data.filter((book) => book.Title === title);
      console.log(`-`)
      console.log(book)
      console.log(`-`)
      if (book.length===0) {
        console.log(`can not find book that delete`)
      }
      else{
        // await this.clickDeleteButton;
        let deletebtn = await $(`//a[text()='${title}']/../../../..//span[@id='delete-record-undefined']`)
        await deletebtn.waitForClickable()
        await deletebtn.click()
        console.log(`-`)
        await this.modal.isDisplayed();
        await browser.pause(2000)
        let titleAlert =await this.titleAlert.getText();
        let contentAlert =await this.message.getText();
        console.log(titleAlert)
        console.log(contentAlert)

        await this.clickOkButton()
        await browser.pause(2000)
        const okButton = $('#closeSmallModal-ok');
        await browser.pause(2000)
        console.log(`-`)
        await browser.pause(2000)
        console.log(`the book has been deleted`)
      }

    
  }
  async getDeleteButtonByTitleAfterDele(testid: string, title: string) {
    
    console.log(`-------------------`);
   

// "//a[text()='Learning JavaScript Design Patterns']/../../../..//span[@id='delete-record-undefined']"

      let dataAfter = await this.getDataBookInProfileAfterDeleteBook(testid);
      let bookAfter = dataAfter.filter((book) => book.Title === title);
      console.log(`-`)
      console.log(bookAfter)
      console.log(`-`)
      if (bookAfter.length===0) {
        console.log(`Confirm that book deleted . can not find book that delete`)
      }


    
  }

  async getSelectedOption() {
    const selectDropdown = await $('select[aria-label="rows per page"]');
    const optionValuePromise = selectDropdown
      .$("option[selected]")
      .getAttribute("value");

    optionValuePromise.then((optionValue) => {
      selectDropdown.selectByAttribute("value", optionValue);
      const selectedOption = selectDropdown.$(`option[value="${optionValue}"]`);
      const selectedOptionText = selectedOption.getText();
      console.log("Selected option:", selectedOptionText);
    });
    // return selectedOptionText
  }

  async clickPreviousButton() {
    await this.click(await this.nextBtn);
  }
  async clickProfileButton() {
    await this.click(await this.getProfileBtn);
  }
  async clickGoToBookStoreButton() {
    await this.click(await this.getGotoBookStoreBtn);
  }
  async clickDeleteAcountButton() {
    await this.click(await this.getDeleteAccountBtn);
  }
  async clickDeleteAllBooksButton() {
    await this.click(await this.getDeleteAllBooksBtn);
  }

  async readFileWithCallback(path) {
    return fs.readFileSync(path, "utf8");
  }
  async writeFileWithCallback(path, data: string) {
    return fs.writeFileSync(path, data);
  }
  // fs.writeFileSync(filename, data)

  get numberOfDropdowns() {
    return $$(`//*[@aria-label="rows per page"]/option`);
  }

  async getAllValueOfDropdowns() {
    return await this.numberOfDropdowns.map((item) => item.getText());
  }

  async getNumberofDropDowns() {
    let result = await this.numberOfDropdowns.length;
    return result;
  }

  async getNumberOfBooks() {
    let numberofBooks = await homeBookStorePage.allNumberofItems();
  }


  async getAllitemsBookstore(testid:string, title:string) {

    // await this.getDataBookInProfileBeforeDeleteBook

    let fileBook1 = `${process.cwd()}/data/api-res/BookUIRes/allbookInProFileBeforeDelete.json`;
    let allBookPage1 =  await this.readFileWithCallback(fileBook1)
    console.log(allBookPage1)
    console.log(typeof(allBookPage1))
    console.log(`-------1-------`)
    
    let allBookPage1Converted = await JSON.parse(allBookPage1)

    
      // for(let i = 0; i < allBookPage1.length; i++){
      //   if(allBookPage1[i].Title === title)
      // }
      let bookfinded1 = await allBookPage1Converted.filter((book) => book.Title === title);




      if(bookfinded1.length > 1){
        console.log(bookfinded1)
      }
      else {
        // console.log(`can not find book`)
        if (await this.nextBtn.isEnabled()) {
          console.log(`------2--------`)
      
            await this.clickNextButton()
          console.log(`------3--------`)
      
            await this.getDataBookInProfileBookPagi2(testid)
            let fileBook2 = `${process.cwd()}/data/api-res/BookUIRes/allbookInProFileAfterClickNextBtn.json`;
            let allBookPage2 =  await this.readFileWithCallback(fileBook2)
            console.log(typeof(allBookPage2))
            let allBookPage2Converted = await JSON.parse(allBookPage2)
            console.log(allBookPage2)
            console.log(`-----4---------`)
            console.log('Clicked Next button');

            let allBookItems = allBookPage1Converted.concat(allBookPage2Converted)
            console.log(allBookItems)

            let fileAllBooks = `${process.cwd()}/data/api-res/BookUIRes/allBookInProfile.json`;
            let fileAllBooksConvert =  JSON.stringify(allBookItems);
            console.log(typeof(fileAllBooksConvert))
            await this.writeFileWithCallback(fileAllBooks,fileAllBooksConvert)
            console.log(`---------5-----`)


             let fileAllBooks_check =  `${process.cwd()}/data/api-res/BookUIRes/allBookInProfile.json`;
            let checkAgain =  await this.readFileWithCallback(fileAllBooks_check)
            let check = JSON.parse(checkAgain)
            console.log(check)

            let bookfinded2 = await allBookPage2Converted.find((book) => book.Title === title);
            if(bookfinded2){
            console.log(`---------6-----`)
              console.log(`finded the book: ${bookfinded2}`)
            }
            else{
              console.log(`can not find book ${title}`)

            }
            // let fileAllBook =`${process.cwd()}/data/api-res/BookUIRes/allbook2Pages.json`;
            // let allBooks = await allBookPage1.concat(allBookPage2)
            // console.log(`--------------`)
            // console.log(allBooks)
          } else {
            console.log('Next button is disabled');
          }
      }

    //   for book in allBookPage1:
    // if book["Title"] == "Eloquent JavaScript, Second Edition":
    //     print(book)
    //     break

    




  }

}

export default new ProfilePage();

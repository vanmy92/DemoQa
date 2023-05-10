import { Options } from "@wdio/types";
import chai from "chai";
import Page from "./page";
class BookDetails extends Page {
  constructor() {
    super();
  }

  get getBookStoreHeader() {
    return $(".main-header").getText();
  }
  
  
  get getTitle() {
    return $(`#title-label`);
  }
  get getSubTitle() {
    return $(`#subtitle-label`);
  }
  get getAuthor() {
    return $(`#author-label`);
  }
  get getPublisher() {
    return $(`#publisher-label`);
  }
  get getTotalPages() {
    return $(`#pages-label`);
  }
  get getDescription () {
    return $(`#description-label`);
  }
  get getWebsite() {
    return $(`#website-label`);
  }
  
  get getLoginBtn() {
    return $(`#login`);
  }
  get getBackTOBookStoreBtn() {
    return $(`#addNewRecordButton`);
  }

  get getAllValueInEachItem() {
    return $$(`#userName-value`);
  }

  async clickBackToBookStore() {
    await this.click(await this.getBackTOBookStoreBtn);
  }
 
  async clickLogin() {
    await this.click(await this.getLoginBtn);
  }
  async nameBookStoreHeader() {
    return this.getBookStoreHeader;
  }

  async listAllValue(testid: string) {
    const allvalue = $$(await this.getAllValueInEachItem.selector);
    return allvalue.map((element) => element.getText());
  }
  get getISBN() {
    return $(`#ISBN-label`);
  }
  get lengthItems(){
    return $$(`//*[@class="mt-2 row"]`)
  }
  async getAllData(testid:string) {
    let ISBN = await this.getISBN.getText()
    ISBN = ISBN.replace(' :', '')
    let Title = await this.getTitle.getText()
    Title = Title.replace(' :', '')
    let Sub_Title = await this.getSubTitle.getText()
    Sub_Title = Sub_Title.replace(' :', '')
    let Author = await this.getAuthor.getText()
    Author = Author.replace(' :', '')
    let Publisher = await this.getPublisher.getText()
    Publisher = Publisher.replace(' :', '')
    let Total_Pages = await this.getTotalPages.getText()
    Total_Pages = Total_Pages.replace(' :', '')
    let Description = await this.getDescription.getText()
    Description = Description.replace(' :', '')
    let Website  = await this.getWebsite.getText() 
    Website = Website.replace(' :', '')
    let output = await this.listAllValue(testid)
    
    let leng = await this.lengthItems.length
    let arr = [
      {[ISBN]: output[0]},
      {[Title]: output[1]},
      {[Sub_Title]: output[2]},
      {[Author]: output[3]},
      {[Publisher]: output[4]},
      {[Total_Pages]: output[5]},
      {[Description]: output[6]},
      {[Website]: output[7]},
    ]
    return arr
    


  }

  async  logJSONData() {
    
}

 

  // async listAuthort(testid: string) {
  //   const buttonElements = $$(await this.getAuthor.selector);
  //   return buttonElements.map((element) => element.getText());
  // }
  // async listPublisher(testid: string) {
  //   const buttonElements = $$(await this.getPublisher.selector);
  //   return buttonElements.map((element) => element.getText());
  // }
  // async clickAddtoCarts(testid: string, index: number) {
  //   try {
  //     await this.click(await this.getTitle[index]); //  0,1,2,3,4,5 -> click 1,2,3,4,5,6
  //   //   reporter.addStep(testid, "info", ` more Add to cart clicked`);
  //   } catch (err) {
  //     err.message = `Error clicking more Add to cart, ${err.message}`;
  //     throw err;
  //   }
  // }

  // async clickOnceItemAddToCartByTitleName(testid: string, name: string) {
  //   let allitemsnumber = await this.getTitle.length;
  //   let list = await this.listTitle(testid);
  //   for (let i = 0; i < allitemsnumber; i++) {
  //     if (name === list[i]) {
  //       await this.clickAddtoCarts(testid, i);
  //       break;
  //     }
  //   }
  // }
   
  // async getAllDataOfItem_2(testid: string) {
  //   const items = [];

  //   // Loop through the name elements and create a new item object for each one
  //   let a = await this.allNumberofItems();
  //   let titles = await this.getTitle;
  //   let authors = await this.getAuthor;
  //   let publishers = await this.getPublisher;
  //   for (let i = 0; i < a; i++) {
  //     const nameElement = titles[i];
  //     const descElement = authors[i];
  //     const priceElement = publishers[i];
  //     const item = {
  //       Title: await nameElement.getText(),
  //       Author: await descElement.getText(),
  //       Publisher: await priceElement.getText(),
  //     };
  //     console.log(item);
  //     items.push(item);
  //   }

  //   return items;
  // }

  // async getAllDataOfItem_1(testid: string) {
  //   const items = [];

  //   // Loop through the name elements and create a new item object for each one
  //   let a = await this.allNumberofItems();

  //   for (let i = 0; i < a; i++) {
  //     const nameElement = await this.getTitle[i];
  //     const descElement = await this.getAuthor[i];
  //     const priceElement = await this.getPublisher[i];
  //     const item = {
  //       Title: await nameElement.getText(),
  //       Author: await descElement.getText(),
  //       Publisher: await priceElement.getText(),
  //     };
  //     items.push(item);
  //   }

  //   return items;
  // }

  // async getAllDataOfItem1(testid: string) {
  //   const output = [];
  //   const elements = await this.getAllnumberofItems;
  //   console.log("---------------------");
  //   for (let e of elements) {
  //     console.log(e);
  //     const Title = await (await e.$(`a`)).getText();
  //     console.log(Title);
  //     const Author = await (await e.$(`.//div[3]`)).getText();
  //     console.log(Author);
  //     const Publisher = await (await e.$(`.//div[4]`)).getText();
  //     console.log(Publisher);

  //     output.push({ Title, Author, Publisher });
  //   }
  //   return output;
  // }

  // async getAllDataOfItem(testid: string) {
  //   const output = [];
  //   const ele1 = await this.allNumberofItems.length;
  //   console.log("---------------------");
  //   for (let i = 0; i < ele1; i++) {
  //     console.log(ele1);
  //     const element = await this.getAllnumberofItems[i];
  //     const Title = await element.$(`.mr-2 > a`).getText();
  //     const Author = await element
  //       .$(`//*[@class="rt-tr-group"]//div[3]`)
  //       .getText();
  //     const Publisher = await element
  //       .$(`//*[@class="rt-tr-group"]//div[4]`)
  //       .getText();
  //     output.push({ Title, Author, Publisher });
  //   }
  //   return output;
  // }


  // get divElements() { return $$('div.rt-td'); }

  // async getDivData(testid: string) {
  //   const dataArray = [];
  //   let a = await this.allNumberofItems();
  //   console.log(a);
  //   for (let i = 0; i < a; i ++) {
  //     const name = await this.divElements[i + 1].$('span>a').getText();
  //     const title = await this.divElements[i + 2].getText();
  //     const publisher = await this.divElements[i + 3].getText();
  //     dataArray.push({ name, title, publisher });
  //   }
    
  //   return dataArray;
  // }



}

export default new BookDetails();

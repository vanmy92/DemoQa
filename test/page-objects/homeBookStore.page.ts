import { Options } from "@wdio/types";
import chai from "chai";
import Page from "./page";
import bookDetailsPage from "./bookDetails.page";

class HomeBookStorePage extends Page {
  constructor() {
    super();
  }

  get getNameHeader() {
    return $(".main-header").getText();
  }
  get getLoginBtn() {
    return $(`#login`);
  }

  get getAllnumberofItems() {
    return $$(`.mr-2 > a`);
  }

  async allNumberofItems() {
    let result = await this.getAllnumberofItems.length;
    return result;
  }
  async clickLogin() {
    await this.click(await this.getLoginBtn);
  }
  async nameHeader() {
    return this.getNameHeader;
  }
  get getUserNameLabel() {
    return $('#userName-label').getText();
  }
  get getUserNameValue() {
    return $('#userName-value').getText()
  }
  async getUserNameShow() {
    let label = await this.getUserNameLabel;
    let name = await this.getUserNameValue;
    return await label + name; 
  }
  async getUserName(){
    return await this.getUserNameValue
  }
  async listTitle(testid: string) {
    const buttonElements = $$(await this.getTitle.selector);
    return buttonElements.map((element) => element.getText());
  }
  async listAuthort(testid: string) {
    const buttonElements = $$(await this.getAuthor.selector);
    return buttonElements.map((element) => element.getText());
  }
  async listPublisher(testid: string) {
    const buttonElements = $$(await this.getPublisher.selector);
    return buttonElements.map((element) => element.getText());
  }
  async clickAddtoCarts(testid: string, index: number) {
    try {
      await this.click(await this.getTitle[index]); //  0,1,2,3,4,5 -> click 1,2,3,4,5,6
    //   reporter.addStep(testid, "info", ` more Add to cart clicked`);
    } catch (err) {
      err.message = `Error clicking more Add to cart, ${err.message}`;
      throw err;
    }
  }

  async clickOnceItemAddToCartByTitleName(testid: string, name: string) {
    let allitemsnumber = await this.getTitle.length;
    let list = await this.listTitle(testid);
    for (let i = 0; i < allitemsnumber; i++) {
      if (name === list[i]) {
        await this.clickAddtoCarts(testid, i);
        break;
      }
    }
  }

  
   





  async getAllDataOfItem_2(testid: string) {
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

    return items;
  }
  get getTitle(){
    return $$(`.mr-2 > a`)
  }
  get getAuthor() {
    return $$(`//*[@class="rt-tr-group"]//div[3]`);
  }
  get getPublisher() {
    return $$(`//*[@class="rt-tr-group"]//div[4]`);
  }
  async getAllDataOfItem_1(testid: string) {
    const items = [];

    // Loop through the name elements and create a new item object for each one
    let a = await this.allNumberofItems();

    for (let i = 0; i < a; i++) {
      const nameElement = await this.getTitle[i];
      const descElement = await this.getAuthor[i];
      const priceElement = await this.getPublisher[i];
      const item = {
        Title: await nameElement.getText(),
        Author: await descElement.getText(),
        Publisher: await priceElement.getText(),
      };
      items.push(item);
    }

    return items;
  }

  async getAllDataOfItem1(testid: string) {
    const output = [];
    const elements = await this.getAllnumberofItems;
    console.log("---------------------");
    for (let e of elements) {
      console.log(e);
      const Title = await (await e.$(`a`)).getText();
      console.log(Title);
      const Author = await (await e.$(`.//div[3]`)).getText();
      console.log(Author);
      const Publisher = await (await e.$(`.//div[4]`)).getText();
      console.log(Publisher);

      output.push({ Title, Author, Publisher });
    }
    return output;
  }

  async getAllDataOfItem(testid: string) {
    const output = [];
    const ele1 = await this.allNumberofItems.length;
    console.log("---------------------");
    for (let i = 0; i < ele1; i++) {
      console.log(ele1);
      const element = await this.getAllnumberofItems[i];
      const Title = await element.$(`.mr-2 > a`).getText();
      const Author = await element
        .$(`//*[@class="rt-tr-group"]//div[3]`)
        .getText();
      const Publisher = await element
        .$(`//*[@class="rt-tr-group"]//div[4]`)
        .getText();
      output.push({ Title, Author, Publisher });
    }
    return output;
  }


  get divElements() { return $$('div.rt-td'); }

  async getDivData(testid: string) {
    const dataArray = [];
    let a = await this.allNumberofItems();
    console.log(a);
    for (let i = 0; i < a; i ++) {
      const name = await this.divElements[i + 1].$('span>a').getText();
      const title = await this.divElements[i + 2].getText();
      const publisher = await this.divElements[i + 3].getText();
      dataArray.push({ name, title, publisher });
    }
    
    return dataArray;
  }


}

export default new HomeBookStorePage();

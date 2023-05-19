import { Options } from "@wdio/types";
import chai from "chai";
import Page from "./page";

class Elements extends Page {
  constructor() {
    super();
  }

  get getBookStoreAppBtn(){
    return $(`//*[@class="main-header"]`)
  }
  get getElements(){
    return $(`//*[@class="card mt-4 top-card"]//*[text()="Elements"]`)
  }
  async clickElements(){
    await this.click(await this.getElements);
  }
  
}

export default new Elements();

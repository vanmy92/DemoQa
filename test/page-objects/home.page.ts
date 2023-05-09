import { Options } from "@wdio/types";
import chai from "chai";
import Page from "./page";

class HomePage extends Page {
  constructor() {
    super();
  }

  get getBookStoreAppBtn(){
    return $('h5=Book Store Application')
  }
  async clickBookStoreApp(){
    await this.click(await this.getBookStoreAppBtn);
  }
  
}

export default new HomePage();

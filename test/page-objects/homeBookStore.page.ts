import { Options } from "@wdio/types";
import chai from "chai";
import Page from "./page";

class HomeBookStorePage extends Page {
  constructor() {
    super();
  }

  get getNameHeader(){
    return $('.main-header').getText()
  }
  get getLoginBtn(){
    return $(`#login`)
  }

  get getAllnumberofItems(){
    return $$(`//*[@class="rt-tbody"]/div`)
  }
  async allNumberofItems(){
    let result = await this.getAllnumberofItems.length;
    return result;
  }
  async clickLogin(){
    await this.click(await this.getLoginBtn);
  }
  async nameHeader(){
    return this.getNameHeader
  }
}

export default new HomeBookStorePage();

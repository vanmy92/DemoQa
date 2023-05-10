import { Options } from "@wdio/types";
import chai from "chai";
import Page from "./page";

class HomeBookStorePage extends Page {
  constructor() {
    super();
  }

  get getLoginHeader() {
    return $(".main-header").getText();
  }
  get getUserName() {
    return $(`#userName`);
  }
  get getPassWord() {
    return $(`#password`);
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

  async clickLogin() {
    await this.click(await this.getloginBtn);
  }
  async clickNewUser() {
    await this.click(await this.getNewUserBtn);
  }

  

}

export default new HomeBookStorePage();

import { Options } from "@wdio/types";
import chai from "chai";
import Page from "./page";

class HomeBookStorePage extends Page {
  constructor() {
    super();
  }

  get getRegisterHeader() {
    return $(".main-header").getText();
  }
  get getFirstName() {
    return $(`#firstname`);
  }
  get getLastName() {
    return $(`#lastname`);
  }
  get getUserName() {
    return $(`#userName`);
  }
  get getPassword() {
    return $(`#password`);
  }
  get getNewUserBtn() {
    return $(`#newUser`);
  }
  get getErrorUserAndPass() {
    return $(`#name`);
  }
  get getCapcha() {
    return $(`#rc-anchor-container`);
  }
  get getRegister() {
    return $(`#register`);
  }
  get getGotoLogin() {
    return $(`#gotologin`);
  }
  get getErrorMessage() {
    return $(`#name`).getText();
  }
  

  async clickCapcha() {
    await this.click(await this.getCapcha);
  }
  async clickBackToLogin() {
    await this.click(await this.getGotoLogin);
  }
  async clickRegister() {
    await this.click(await this.getRegister);
  }

  async enterDefaultValue(testid:string) {
    await this.getFirstName.setValue("nguyen van")
    await this.getLastName.setValue("abc")
    await this.getUserName.setValue("asdf")
    await this.getPassword.setValue("123456A@a")
    await this.clickCapcha
    await browser.pause(2000)
    await this.clickRegister
    await browser.pause(2000)
  }

  

}

export default new HomeBookStorePage();

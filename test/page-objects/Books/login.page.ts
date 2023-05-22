import { Options } from "@wdio/types";
import chai from "chai";
import Page from "./page";
import reporter from "../../helper/reporter";

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

  async enterUserName(testid: string, username: string) {
    if (!username)
      throw new Error(`Given username: ${username} is not invalid`);
    try {
      username = username.trim();
      await this.typeInto(await this.getUserName, username);
      await browser.pause(1000)
      reporter.addStep(
        testid,
        "info",
        `username ${username} entered successfully`
      );
    } catch (err) {
      err.message = `Error entering usernama: ${username}, ${err.message}`;
      throw err;
    }
  }
  async enterPassWord(testid: string, password: string) {
    if (!password)
      throw new Error(`Given password: ${password} is not invalid`);
    try {
      password = password.trim();
      await this.typeInto(await this.getPassWord, password);
      await browser.pause(1000)
      reporter.addStep(
        testid,
        "info",
        `password ${password} entered successfully`
      );
    } catch (err) {
      err.message = `Error entering password: ${password}, ${err.message}`;
      throw err;
    }
  }

  async loginToBookStoreApp(
    testid: string,
    username: string,
    password: string
  ) {
    try {
      await this.enterUserName(testid, username);
      await this.enterPassWord(testid, password);
    } catch (err) {
      throw err;
    }
  }
}

export default new HomeBookStorePage();

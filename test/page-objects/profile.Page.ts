import { Options } from "@wdio/types";
import chai from "chai";
import Page from "./page";
import reporter from "../helper/reporter";

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
  

  
  

  
}

export default new ProfilePage();

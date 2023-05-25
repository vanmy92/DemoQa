import { Options } from "@wdio/types";
import chai from "chai";
import Page from "../page";

class PopUpAddItem extends Page {
  constructor() {
    super();
  }

  get getCheckPopupAppear() {
    return $(`//*[@class="modal-content"]`);
  }

  get getTitlePopup() {
    return $(`#registration-form-modal`);
  }

  get getSubmitBtn() {
    return $(`#submit`);
  }
  get getFirstName() {
    return $(`#firstName`);
  }
  get getLastName() {
    return $(`#lastName`);
  }
  get getEmail() {
    return $(`#userEmail`);
  }
  get getAge() {
    return $(`#age`);
  }
  get getSalary() {
    return $(`#salary`);
  }
  get getDepartment() {
    return $(`#department`);
  }
  async setDefaultItem() {
    await browser.pause(1000);
    await this.getFirstName.setValue("First");
    await browser.pause(1000);
    await this.getLastName.setValue("Last");
    await browser.pause(1000);
    await this.getEmail.setValue("firstlast@gmail.com");
    await browser.pause(1000);
    await this.getAge.setValue(20);
    await browser.pause(1000);
    await this.getSalary.setValue(120000);
    await browser.pause(1000);
    await this.getDepartment.setValue("Administ");
  }
  
  async clickSubmit() {
    await this.click(await this.getSubmitBtn);
  }


}

export default new PopUpAddItem();

import { Options } from "@wdio/types";
import chai from "chai";
import Page from "./page";

import fs from "fs";

class ElementHomePage extends Page {
  constructor() {
    super();
  }

  get getElementsBtn() {
    return $(`//*[@class="card-body"]//*[text()="Elements"]`)
  }
  get getTextBoxBtn() {
    return $(`//*[@class="btn btn-light "]//*[text()="Text Box"]`)
  }
  get getCheckBoxBtn() {
    return $(`//*[@id="item-1"]//*[text()="Check Box"]`)
  }
  get fullnameTxt (){
    return $(`#userName`)
  }
  get emailTxt (){
    return $(`#userEmail`)
  }
  get currentAddressTxt (){
    return $(`#currentAddress`)
  }
  get permanentAddressTxt(){
    return $(`#permanentAddress`)
  }
  get submitBtn(){
    return $(`#submit`)
  }
  get nameTxt(){
    return $(`#name`)
  }
  get email2Txt(){
    return $(`#email`)
  }
  get curentTxt(){
    return $(`//*[@class="border col-md-12 col-sm-12"]//child::p[3]`)
  }
  get permanTxt(){
    return $(`//*[@class="border col-md-12 col-sm-12"]//child::p[4]`)
  }

  get expandBtn(){
    return $(`//*[@aria-label="Expand all"]`)
  }
  async clickExpandBtn(){
    await this.click(await this.expandBtn);
  }

  get collapseBtn(){
    return $(`//*[@aria-label="Collapse all"]`)
  }
  async clickCollapseBtn(){
    await this.click(await this.collapseBtn);
  }
  async clickElements(){
    await this.click(await this.getElementsBtn);
  }
  async clickTextBoxBtn(){
    await this.click(await this.getTextBoxBtn);
  }
  async clickCheckBoxBtn(){
    await this.click(await this.getCheckBoxBtn);
  }
  async setValueFullname(){
    (await this.fullnameTxt).setValue("Full Name")
  }
  async setValueEmail(){
    if(await this.emailTxt.getValue() === ""){
      console.log(`it has no email before set it`)
      await this.emailTxt.setValue("tinhte@gmail.com")
    }
  }
  async setValueCurrentAddress(){
    if(await this.currentAddressTxt.getValue() === ""){
      console.log(`it has no current address before set it`)
      await this.currentAddressTxt.setValue("123 asdf qwer zxcv")
      console.log(`set value in current address: 123 asdf qwer zxcv`)
      await browser.keys(["Control", "A"])  
      await browser.pause(1000)
      await browser.keys("Delete")
      await browser.pause(1000)
      await this.currentAddressTxt.setValue("zxcv asdf qwer 1234")
      console.log(`set value after delete in current address: zxcv asdf qwer 1234`)

      // await browser.keys("Enter");
    }
  }

  async setPermanentAddress(){
    if(await this.permanentAddressTxt.getValue() === ""){
      let value=  await this.currentAddressTxt.getValue()
      await this.permanentAddressTxt.setValue(value)
      console.log(`copy value from current address paste to permanentAddress: ${value}`)
    }
  }
  async checkHomeCheBox(){
    
  }

  async clickSubmit(){
    await this.click(await this.submitBtn)
  }
  async getValueAfterClick(){
    let value =  (await this.nameTxt).getText() + "\n" + await this.email2Txt.getText() + "\n" + await this.curentTxt.getText() + "\n" + await this.permanTxt.getText()
    console.log(value)
  }
}

export default new ElementHomePage();

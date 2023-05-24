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
  get getHomeChecKBox(){
    return $(`//*[@for="tree-node-home"]`)
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
  async clickHomeCheckBox(){
    return this.click(await this.getHomeChecKBox)
  }
  async clickExpandBtn(){
    await this.click(await this.expandBtn);
  }
  get getSelectedText(){
    return $$(`.text-success`)
  }
  get getTitleSelectedText(){
    return $(`//*[@id="result"]//child::span[1]`)
  }
  get getDrowHome(){
    return $(`//*[text()="Home"]/../../button`)
  }
  get getDropDownHomeOpen(){
    return $(`//*[@class="rct-icon rct-icon-expand-open"]`)
  }
  get getDropDownHomeClose(){
    return $(`//*[@class="rct-icon rct-icon-expand-close"]`)
  }
  
  get getCheckDesktopDropdown(){
    return $(`//*[text()="Desktop"]`)
  }
  get getCheckDocumentsDropdown(){
    return $(`//*[text()="Documents"]`)
  }
  get getCheckDownloadsDropdown(){
    return $(`//*[text()="Downloads"]`)
  }
  get getDesktopDropdown(){
    return $(`//*[@for="tree-node-desktop"]`)
  }
  get getNotes(){
    return $(`//*[text()="Notes"]`)
  }
  get getCommands(){
    return $(`//*[text()="Commands"]`)
  }
  get getDocumentsDropdown(){
    return $(`//*[text()="Documents"]`)
  }
  get getWorkSpaceDropdown(){
    return $(`//*[text()="WorkSpace"]`)
  }
  
  get getDesktopBtn(){
    return $(`//*[text()="Desktop"]/../../button`)
  }
  get getDesktopOpen(){
    return $(`//*[@class="rct-icon rct-icon-expand-open"]/../..//*[text()="Desktop"]`)
  }
  get getDesktopClose(){
    return $(`//*[@class="rct-icon rct-icon-expand-close"]/../..//*[text()="Desktop"]`)
  }
  get getWebTables(){
    return $(`//*[@class="btn btn-light "]//*[text()="Web Tables"]`)
  }
  get getAddBtn(){
    return $(`#addNewRecordButton`)
  }
  async clickAddBtn(){
    await this.click(await this.getAddBtn);
  }
  async clickWebTables(){
    await this.click(await this.getWebTables);
  }
  async clickDrowHome(){
    await this.click(await this.getDrowHome);
  }
  async clickDesktopOpen(){
    await this.click(await this.getDesktopBtn);
  }
  async clickDesktopDropDown(){
    await this.click(await this.getDesktopDropdown);
  }
  async clickNotesBtn(){
    await this.click(await this.getNotes);
  }
  async clickCommandsBtn(){
    await this.click(await this.getCommands);
  }

  async checkShowDesDocuDown(): Promise<boolean> {
    // let elem = await $('#notDisplayed');
      // let isDisplayed = await elem.isDisplayed();
      // console.log(isDisplayed); // outputs: false
    if(
      (await this.getCheckDesktopDropdown.isDisplayed()) &&
      (await this.getCheckDocumentsDropdown.isDisplayed()) &&
      (await this.getCheckDownloadsDropdown.isDisplayed())
      ){
        return true
      }
    return false
  }
  async checkShowDesktopDetail(): Promise<boolean> {
    // let elem = await $('#notDisplayed');
      // let isDisplayed = await elem.isDisplayed();
      // console.log(isDisplayed); // outputs: false
    if(
      (await this.getNotes.isDisplayed()) &&
      (await this.getCommands.isDisplayed())
      ){
        return true
      }
    return false
  }
  async checkCheckedDesDocuDownAfterClickedAll(): Promise<boolean> {
   
    if(
      (await this.getCheckDesktopDropdown.isDisplayed()) &&
      (await this.getCheckDocumentsDropdown.isDisplayed()) &&
      (await this.getCheckDownloadsDropdown.isDisplayed())
      ){
        return true
      }
    return false
  }
  
//*[@class="rct-icon rct-icon-uncheck"]/../..//*[text()="Notes"]

  async clickDropDownHomeCloseBtn(){
    await this.click(await this.getDropDownHomeClose);
  }
  async clickDropDownHomeOpenBtn(){
    await this.click(await this.getDropDownHomeOpen);
  }
  
  async listResults() {
    const buttonElements = $$(await this.getSelectedText.selector);
    return buttonElements.map((element) => element.getText());
  }
  async checkedSelected(){
    let title = await this.getTitleSelectedText.getText()
    let selected = await this.listResults()
    let convertSelectd = JSON.stringify(selected)
    return title+convertSelectd
    
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

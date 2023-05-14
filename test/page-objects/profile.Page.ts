import { Options } from "@wdio/types";
import chai from "chai";
import Page from "./page";
import reporter from "../helper/reporter";
import homeBookStorePage from "./homeBookStore.page";

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
  get previousBtn() { 
    return $(`button=Previous`)
  }
  get nextBtn() { 
    return $(`button=Next`)
  }
  async clickNextButton() {
    await this.click(await this.nextBtn);
  }

  async getValueOfPageNum(){
    return (await $(`//input[@aria-label="jump to page"]`)).getValue()
  }
  async getValueOfPageNumOf(){
    return await $(`//*[@class="-totalPages"]`).getText()
  }

  async getSelectedOption(){
    const selectDropdown =await $('select[aria-label="rows per page"]');
    const optionValuePromise = selectDropdown.$('option[selected]').getAttribute('value');
    
    optionValuePromise.then((optionValue) => {
      selectDropdown.selectByAttribute('value', optionValue);
      const selectedOption = selectDropdown.$(`option[value="${optionValue}"]`);
      const selectedOptionText = selectedOption.getText();
      console.log('Selected option:', selectedOptionText);
    });
        // return selectedOptionText
  }

  async clickPreviousButton() {
    await this.click(await this.nextBtn);
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


  get numberOfDropdowns(){
    return $$(`//*[@aria-label="rows per page"]/option`)
  }

  async getAllValueOfDropdowns(){
      return await this.numberOfDropdowns.map((item) =>item.getText())
  }

  async getNumberofDropDowns(){
    let result = await this.numberOfDropdowns.length
    return result
  }

  async getNumberOfBooks(){
   let numberofBooks = await homeBookStorePage.allNumberofItems()

  }
  
  

  
}

export default new ProfilePage();

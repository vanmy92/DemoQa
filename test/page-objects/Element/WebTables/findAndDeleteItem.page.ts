import { Options } from "@wdio/types";
import chai from "chai";
import Page from "../page";
import writeRead from "../../ReadOrWriteFile/writeRead";
import popupAddItemPage from "./popupAddItem.page";
import webTablesPage from "./webTables.page";
class FindAndDeleteItem extends Page {
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
  
  

  async findAndEditItem(item:string) {
  let fileData = `${process.cwd()}/data/api-res/Elements/WebTables/allDataTable.json`;
  let data = await writeRead.readFileWithCallback(fileData);
  let dataConvert = JSON.parse(data);
  console.log(`edit123123`)
  console.log(data)
  console.log(typeof data) 
  let finditem = dataConvert.filter((itemfind) => itemfind["First Name"]===item)
  if(finditem.length === 0) {
    console.log(`Can not find item`)
  }else{
    console.log(`finded item:`)  
    console.log(item)
    console.log(`edit item:`)
    //find the parent of the delete button
    //*[text()="Alden"]/..//div/div//*[@title="Edit"]
    let editbtn = await $(
      `//*[text()='${item}']/..//div/div//*[@title="Edit"]`
    );
    await editbtn.waitForClickable();
    await editbtn.click();
    console.log(`-`);
    await this.getCheckPopupAppear.isDisplayed();
    await popupAddItemPage.setDefaultItem()
    await popupAddItemPage.clickSubmit()
    await browser.pause(2000)

  }



  await webTablesPage.verifyTableAfterAction()
  await browser.debug()

  }
  
  async clickSubmit() {
    await this.click(await this.getSubmitBtn);
  }


}

export default new FindAndDeleteItem();

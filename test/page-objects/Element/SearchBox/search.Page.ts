import { Options } from "@wdio/types";
import chai from "chai";
import Page from "../page";
import writeRead from "../../ReadOrWriteFile/writeRead";
import webTablesPage from "../WebTables/webTables.page";
class SearchBoxPage extends Page {
  constructor() {
    super();
  }

  get getSearchBox() {
    return $(`#searchBox`);
  }

  get getNotFound() {
    return $(`//*[@class="rt-noData"]`).getText();
  }

  async searchItem(item: string): Promise<boolean> {
    await this.getSearchBox.setValue(item);
    await browser.pause(2000);
    console.log(`----------1.1-------`);
    console.log(`first`);
    await webTablesPage.verifyTableAfterAction();
    await browser.pause(1000);
    let check = await webTablesPage.checkDataEmpty();
    console.log(`----------1.2-------`);

    if (check === true) {
      console.log(`find the item 11111: `);
      
      await webTablesPage.verifyTableAfterAction();
      console.log(`find the item 22222: `);
      return true;
    } else {
      console.log(`-----------------`);
      console.log(`can not find the ${item} item`);
      return false;
    }
  }

  // no or 1 items found

  // async searchAndDelete(nameFind: string) {
  //   if ((await this.searchItem(nameFind)) === true) {
  //     console.log(`finded item:`);
  //     console.log(`edit item:`);
  //     //find the parent of the delete button
  //     //*[text()="Alden"]/..//div/div//*[@title="Edit"]
  //     let editbtn = await $(
  //       `//div[contains(text(), '${nameFind}')]/..//div//div//span[@title="Delete"]`
  //     );
  //     await editbtn.click();
  //     console.log(`-`);
  //     console.log(`the ${nameFind} is deleted`);
  //     await browser.pause(2000);
  //   } else {
  //     console.log(`can not find the ${nameFind} item to delete`);
  //   }
  // }
  async searchAndDelete(nameFind: string) {
    if ((await this.searchItem(nameFind)) === true) {
      console.log(`finded item:`);
      console.log(`edit item:`);
      //find the parent of the delete button
      //*[text()="Alden"]/..//div/div//*[@title="Edit"]
      
      let fileHeader = `${process.cwd()}/data/api-res/Elements/WebTables/allDataTableAterDeOrFindOrEdit.json`;
      let dataDt = await writeRead.readFileWithCallback(fileHeader);
      const dataDataArray = JSON.parse(dataDt);
      // console.log(`check to delete 1`)
      // console.log(dataDataArray)
      // console.log(dataDataArray.length)
      // console.log(`check to delete 2`)
      for(let i=0; i<dataDataArray.length; i++) {
        // console.log(`check to delete 3`)
         let editbtn = await $(
        `//div[contains(text(), '${dataDataArray[i].Age}')]/..//div//div//span[@title="Delete"]`
        );
        await editbtn.click();
        await browser.pause(3000)
      }
      await this.getSearchBox.click()
      await browser.keys(["Control", "A"]);
      await browser.pause(1000);
      await browser.keys("Delete");
      await browser.pause(1000);
      console.log(`-`);
      console.log(`the all items relative to ${nameFind} is deleted`);
      console.log(`Get data after delete`)
      await webTablesPage.dataEndAction()
      await browser.pause(2000);
    } else {
      console.log(`can not find the ${nameFind} item to delete`);
      console.log(`enter more value to find and delete it`)
    }
  }


  async searchItemByJsonFile() {
    let fileData = `${process.cwd()}/data/fileUpload/WebTables/finditems.json`;
    let data = await writeRead.readFileWithCallback(fileData);
    let dataConvert = JSON.parse(data);
    for (let i = 0; i < dataConvert.length; i++) {
      let name = dataConvert[i].nameFind;
      await this.getSearchBox.setValue(name);
      await webTablesPage.verifyTableAfterAction();
      await browser.pause(1000);
      let check = await webTablesPage.checkDataEmpty();
      console.log(`----------1.2-------`);

      if (check === true) {
        console.log(`find the item will match with ${name}  `);
        await webTablesPage.verifyTableAfterAction();
      } else {
        console.log(`-----------------`);
        console.log(`can not find the ${name} item`);
      }
      await browser.keys(["Control", "A"]);
      await browser.pause(1000);
      await browser.keys("Delete");
      await browser.pause(1000);
    }
  }

  //   async searchItem(item:string) {
  //   let fileData = `${process.cwd()}/data/api-res/Elements/WebTables/allDataTable.json`;
  //   let data = await writeRead.readFileWithCallback(fileData);
  //   let dataConvert = JSON.parse(data);
  //   console.log(`edit123123`)
  //   console.log(data)
  //   console.log(typeof data)
  //   let finditem = dataConvert.filter((itemfind) => itemfind["First Name"]===item)
  //   if(finditem.length === 0) {
  //     console.log(`Can not find item`)
  //   }else{
  //     console.log(`finded item:`)
  //     console.log(item)
  //     console.log(`edit item:`)
  //     //find the parent of the delete button
  //     //*[text()="Alden"]/..//div/div//*[@title="Edit"]
  //     let editbtn = await $(
  //       `//*[text()='${item}']/..//div/div//*[@title="Edit"]`
  //     );
  //     await editbtn.waitForClickable();
  //     await editbtn.click();
  //     console.log(`-`);
  //     await this.getCheckPopupAppear.isDisplayed();
  //     await popupAddItemPage.setDefaultItem()
  //     await popupAddItemPage.clickSubmit()
  //     await browser.pause(2000)

  //   }

  //   await webTablesPage.verifyTableAfterAction()
  //   await browser.debug()

  //   }
}

export default new SearchBoxPage();

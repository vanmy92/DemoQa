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
    console.log(`first`)
    await webTablesPage.verifyTableAfterAction();
    await browser.pause(1000);
    let check = await webTablesPage.checkDataEmpty()
    console.log(`----------1.2-------`);

    if ( check === true) {
      console.log(`find the item: `)
      await webTablesPage.verifyTableAfterAction();
      return true;
    } else { 
      console.log(`-----------------`);
      console.log(`can not find the ${item} item`);
      return false;
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

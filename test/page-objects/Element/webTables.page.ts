import { Options } from "@wdio/types";
import chai from "chai";
import Page from "./page";
import WritePage from "../ReadOrWriteFile/writeRead";

class WebTablesPage extends Page {
  constructor() {
    super();
  }

  get getListHeader(){
    return $$(`//*[@class="rt-resizable-header-content"]`)
  }
  

  async getAllValueHeader() {
    return await this.getListHeader.map((item) => item.getText());
  }
  get getWebTables(){
    return $(`//*[@class="btn btn-light active"]//*[text()="Web Tables"]`)
  }
  get getAddBtn(){
    return $(`#addNewRecordButton`)
  }
  async saveListHeader(){
      
    let dataheader = await this.getAllValueHeader()
      let fileAllHeaderConvert = JSON.stringify(dataheader);
      console.log(typeof fileAllHeaderConvert);      
      let fileHeader = `${process.cwd()}/data/api-res/Elements/WebTables/headertable.json`;
      await WritePage.writeFileWithCallback(fileHeader, fileAllHeaderConvert);


  }
  async clickAddBtn(){
    await this.click(await this.getAddBtn);
  }
  async clickWebTables(){
    await this.click(await this.getWebTables);
  }
  
}

export default new WebTablesPage();

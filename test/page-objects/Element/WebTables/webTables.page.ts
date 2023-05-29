import { Options } from "@wdio/types";
import chai from "chai";
import Page from "../page";
import WritePage from "../../ReadOrWriteFile/writeRead";
import { DataTable } from "@wdio/cucumber-framework";
import writeRead from "../../ReadOrWriteFile/writeRead";

class WebTablesPage extends Page {
  constructor() {
    super();
  }

  get getListHeader() {
    return $$(`//*[@class="rt-resizable-header-content"]`);
  }

  async getAllValueHeader() {
    return await this.getListHeader.map((item) => item.getText());
  }
  get getWebTables() {
    return $(`//*[@class="btn btn-light active"]//*[text()="Web Tables"]`);
  }
  get getAddBtn() {
    return $(`#addNewRecordButton`);
  }
  get getRowTable() {
    return $$(`//*[@class="rt-tr-group"]`);
  }
  get getdatatable() {
    return $$(`//*[@class="rt-td"]`);
  }

  async saveDataTable() {
    let condition = await this.getListHeader.length;
    // console.log(condition)
    let condition_2 = condition - 1;
    // console.log(condition_2)
    let run = await this.getdatatable.length;
    // console.log(run)
    let generateNumber = [];
    for (let i = 0; i < run; i++) {
      let a = condition_2 + i * condition;
      if (a < run) {
        generateNumber.push(a);
      }
    }
    // console.log(generateNumber);
    let items = [];
    for (let i = 0; i < run; i++) {
      if (!generateNumber.includes(i)) {
        let dataTb = await this.getdatatable[i].getText();
        let a = [];
        if (!dataTb || dataTb == "" || dataTb == " ") {
          break;
        } else {
          items.push(dataTb);
        }
      }
    }
    let fileAllDataConvert = JSON.stringify(items);
    // console.log(typeof fileAllDataConvert);
    let fileData = `${process.cwd()}/data/api-res/Elements/WebTables/dataTable.json`;
    await WritePage.writeFileWithCallback(fileData, fileAllDataConvert);
  }
  async saveListHeader() {
    let dataheader = await this.getAllValueHeader();
    let fileAllHeaderConvert = JSON.stringify(dataheader);
    // console.log(typeof fileAllHeaderConvert);
    let fileHeader = `${process.cwd()}/data/api-res/Elements/WebTables/headerTable.json`;
    await WritePage.writeFileWithCallback(fileHeader, fileAllHeaderConvert);
  }
  get getEmptyValue() {
    return $$(`//*[@class="rt-td"]`);
  }

  async dataTb() {
    let header = `${process.cwd()}/data/api-res/Elements/WebTables/headerTable.json`;
    let headerDt = await writeRead.readFileWithCallback(header);
    const dataHeaderArray = JSON.parse(headerDt);

    let dataD = `${process.cwd()}/data/api-res/Elements/WebTables/dataTable.json`;
    let dataDt = await writeRead.readFileWithCallback(dataD);
    let condition = (await this.getListHeader.length) - 1;
    // console.log(condition);

    let result = [];
    const dataDataArray = JSON.parse(dataDt);
    for (let i = 0; i < dataDt.length; i += condition) {
      let subArray = dataDataArray.slice(i, i + condition);
      if (subArray.length === 0) {
        break;
      }
      result.push(subArray);
    }
    // console.log(dataHeaderArray);
    // console.log(result);
    // console.log(result.length)

    // let combine = result.unshift(dataHeaderArray)
    // console.log(combine)

    let formattedResult = result.map((item) => {
      return {
        [dataHeaderArray[0]]: item[0] + item[0].slice(1),
        [dataHeaderArray[1]]: item[1] + item[1].slice(1),
        [dataHeaderArray[2]]: item[2],
        [dataHeaderArray[3]]: item[3],
        [dataHeaderArray[4]]: item[4],
        [dataHeaderArray[5]]: item[5] + item[5].slice(1),
        [dataHeaderArray[6]]: "",
      };
    });

    console.log(formattedResult);
    let allData = JSON.stringify(formattedResult);
    let fileHeader = `${process.cwd()}/data/api-res/Elements/WebTables/allDataTable.json`;
    await WritePage.writeFileWithCallback(fileHeader, allData);
  }
  async checkDataEmpty(): Promise<boolean> {
    let fileHeader = `${process.cwd()}/data/api-res/Elements/WebTables/allDataTable.json`;
    let readData = await writeRead.readFileWithCallback(fileHeader);

    if (JSON.parse(readData).length === 0) {
      return false;
    } else {
      return true;
    }
  }

  async verifyTableAfterAction(): Promise<boolean> {
    await this.saveDataTable();
    await browser.pause(1500);
    await this.dataTb();
    await browser.pause(1500);
    return true;
  }

  async clickAddBtn() {
    await this.click(await this.getAddBtn);
  }
  async clickWebTables() {
    await this.click(await this.getWebTables);
  }
}

export default new WebTablesPage();

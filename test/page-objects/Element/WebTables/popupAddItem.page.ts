import { Options } from "@wdio/types";
import chai from "chai";
import Page from "../page";
import onedatatables from "../../../../../DemoQa/data/fileUpload/WebTables/onedatatables.json";
import moredatatables from "../../../../../DemoQa/data/fileUpload/WebTables/moredatatables.json";
import webTablesPage from "./webTables.page";
import fs from "fs";
import * as csv from "csv-parser";
import * as Excel from "exceljs";
import JSZip from 'jszip';
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

  async setFirstName(fname: string) {
    await this.typeInto(await this.getFirstName, fname);
  }
  async setLastName(lname: string) {
    await this.typeInto(await this.getLastName, lname);
  }
  async setEmail(email: string) {
    await this.typeInto(await this.getEmail, email);
  }
  async setAge(age: number) {
    await this.typeIntoNumber(await this.getAge, age);
  }
  async setSalary(salary: number) {
    await this.typeIntoNumber(await this.getSalary, salary);
  }
  async setDepartment(department: string) {
    await this.typeInto(await this.getDepartment, department);
  }

  async setInputOneItems() {
    await browser.pause(1000);
    await this.setFirstName(onedatatables["First Name"]);
    await browser.pause(1000);
    await this.setLastName(onedatatables["Last Name"]);
    await browser.pause(1000);
    await this.setEmail(onedatatables.Email);
    await browser.pause(1000);
    await this.setAge(onedatatables.Age);
    await browser.pause(1000);
    await this.setSalary(onedatatables.Salary);
    await browser.pause(1000);
    await this.setDepartment(onedatatables.Department);
    await browser.pause(1000);
    await browser.debug;
  }

  async enterMoreItems() {
    // let loops= await moredatatables.length
    for (const row of moredatatables) {
      await this.setInputMoreItems(
        row["First Name"],
        row["Last Name"],
        row["Email"],
        row["Age"],
        row["Salary"],
        row["Department"]
      );
    }
  }

  async setInputMoreItems(
    firstname: string,
    lastname: string,
    email: string,
    age: number,
    salary: number,
    department: string
  ) {
    try {
      await webTablesPage.clickAddBtn();
      await browser.pause(1000)
      await this.setFirstName(firstname);
      await browser.pause(1000)
      await this.setLastName(lastname);
      await browser.pause(1000)
      await this.setEmail(email);
      await browser.pause(1000)
      await this.setAge(age);
      await browser.pause(1000)
      await this.setSalary(salary);
      await browser.pause(1000)
      await this.setDepartment(department);
      await browser.pause(1000)
      await this.clickSubmit();
      await browser.pause(2000)
    } catch (err) {
      throw err;
    }
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


  async  readZipFile(filepath: string): Promise<any[][]> {
    const zip = new JSZip();
    try {
      const data = await zip.loadAsync(filepath);
      const file = data.files[Object.keys(data.files)[0]];
      const content = await file.async('text');
      const lines = content.split('\n');
      const result: any[][] = [];
      for (let i = 0; i < lines.length; i++) {
        const row = lines[i].split(',');
        result.push(row);
      }
      return result;
    } catch (error) {
      console.error(`Error reading zip file: ${error}`);
      throw error;
    }
  }


  async getExcel_data(filepath: string, sheetName: string): Promise<any[][]> {
    const workbook = new Excel.Workbook();
    try {
      await workbook.xlsx.readFile(filepath);
      const worksheet = workbook.getWorksheet(sheetName);
      if (!worksheet) {
        throw new Error(`Worksheet ${sheetName} not found in file ${filepath}.`);
      }
      const rows = worksheet.rowCount;
      const data: any[][] = [];
      for (let i = 1; i <= rows; i++) {
        const row = worksheet.getRow(i);
        const rowData: any[] = [];
        row.eachCell((cell) => {
          rowData.push(cell.value);
        });
        data.push(rowData);
      }
      return data;
    } catch (error) {
      console.error(`Error reading Excel file: ${error}`);
      throw error;
    }
  }

//   async read() {
//     const filepath = `${process.cwd()}/data/fileUpload/WebTables/moreitemsExcel.csv`;
//     const sheetName = 'Sheet1';
//     const data = await this.getExcel_data(filepath, sheetName);
//     console.log(data);
//     await browser.debug();
//   }

  async read() {
    const filepath = `${process.cwd()}/data/fileUpload/WebTables/moreitemsExcel.csv`;
    const data = await this.readZipFile(filepath);
    console.log(data);
    await browser.debug();
  }

  async clickSubmit() {
    await this.click(await this.getSubmitBtn);
    // await browser.debug;
    await browser.pause(5000);
  }
}

export default new PopUpAddItem();

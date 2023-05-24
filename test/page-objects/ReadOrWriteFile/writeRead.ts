import fs from "fs";
import { Options } from "@wdio/types";
import chai from "chai";
import Page from "../Element/page";

class WritePage extends Page {
  constructor() {
    super();
  }

  async writeFileWithCallback(path, data: string) {
    return fs.writeFileSync(path, data);
  }
  
  async readFileWithCallback(path) {
    return fs.readFileSync(path, "utf8");
  }

}

export default new WritePage();

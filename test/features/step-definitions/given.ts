import { Given, Then, When } from "@wdio/cucumber-framework";
import chai from "chai";
import logger from "../../helper/logger";
import allure from "@wdio/allure-reporter";
import reporter from "../../helper/reporter";

Given(
  /^As a standard user I login to demoqa web app$/,
  async function () {
    
    await browser.url('https://demoqa.com/')
    await browser.scroll(0, 400)
    await browser.pause(2000)
    // await browser.debug()
  }
);

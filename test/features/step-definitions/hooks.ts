import { BeforeStep } from "@wdio/cucumber-framework";
import chai from "chai";

BeforeStep(function(){
    //@ts-ignore
    this.testid = browser.options.testid
    //@ts-ignore
    this.generateTokenPostApi = browser.options.generateTokenPostApi
})
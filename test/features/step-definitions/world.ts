import { setWorldConstructor } from "@wdio/cucumber-framework";
import chai from "chai";

class CustomWorld {
    appid:string
    testid:string
    generateTokenPostApi:string
    constructor(){
        this.appid = "",
        this.testid="",
        this.generateTokenPostApi = ""
    }
}
setWorldConstructor (CustomWorld)
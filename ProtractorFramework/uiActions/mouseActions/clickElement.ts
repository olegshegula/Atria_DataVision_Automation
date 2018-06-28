import { browser, protractor, $ } from "protractor";

import { checkIfElementExists } from "../verifyActions/checkIfElementExists";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;


const clickElement = async(element) => {
    /**
     * Element to perform the action on
     * @type {String}
     */

    var EC = protractor.ExpectedConditions;

    await browser.wait(EC.presenceOf(element),10000,"Element is not loaded");
    await (element.isDisplayed()
            .then(function(){
                element.click();
            }))

};

export {clickElement}
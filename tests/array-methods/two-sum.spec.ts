"use strict";
const expect = require("chai").expect;
const methods = require("../../src/index");

describe("Two Sum Tests", () => {
    it("should return index 0 and 1", async () => {
        const result = methods.arrayMethods.twoSum([2, 7, 11, 15], 9);
        expect(result).to.deep.equal([0, 1]);
    })
})
export {}
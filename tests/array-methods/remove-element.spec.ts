"use strict";
const expect = require("chai").expect;
const methods = require("../../src/index");

describe("Remove element test", () => {
    it("should return k as 5 and nums should be [0,1,3,0,4]", async () => {
        let nums: number[] = [0, 1, 2, 2, 3, 0, 4, 2];
        let k: number = methods.arrayMethods.removeElement(nums, 2);

        expect(k).to.deep.equal(nums.length);
        expect(nums).to.deep.equal([0, 1, 3, 0, 4])
    })
})

export {}
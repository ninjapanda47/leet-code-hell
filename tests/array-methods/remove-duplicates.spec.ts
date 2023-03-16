"use strict";
const expect = require("chai").expect;
const methods = require("../../src/index");

describe("Remove duplicates test", () => {
    it("should return k as 2 and nums should be [1,2]", async () => {
        let nums: number[] = [1, 1, 2];
        let k: number = methods.arrayMethods.removeDuplicates(nums);

        expect(k).to.deep.equal(nums.length);
        expect(nums).to.deep.equal([1, 2])
    })
    it("should return k as 4 and nums should be [1,2,3,4]", async () => {
        let nums: number[] = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4];
        let k: number = methods.arrayMethods.removeDuplicates(nums);
        expect(k).to.deep.equal(nums.length);
        expect(nums).to.deep.equal([1, 2, 3, 4])
    })
})

export {}
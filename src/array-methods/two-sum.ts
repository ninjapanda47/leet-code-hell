/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * **/

export const twoSum = (nums: number[], target: number) => {
    const numIndices = new Map();
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (numIndices.has(difference)) {
            return [numIndices.get(difference), i];
            //[num1, num2]
        }
        numIndices.set(nums[i], i);
    }
};

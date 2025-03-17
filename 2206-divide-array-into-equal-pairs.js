/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    if (nums.length % 2 !== 0) return false

    const countMap = new Map()

    for (let num of nums) {
      countMap.set(num, (countMap.get(num) || 0) + 1)
    }

    for (let freq of countMap.values()) {
      if (freq % 2 !== 0) return false
    }

    return true
};
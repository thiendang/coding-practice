/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let count = 0

  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if(map.get(nums[i])) {
      count += map.get(nums[i])
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }

  return count
}

var nums = [1,2,3,1,1,3]
console.log(numIdenticalPairs)
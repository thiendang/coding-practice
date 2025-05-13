/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
  const n = nums.length
  let left = 0
  let right = n - 1

  // find the first positive using binary search
  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    if (nums[mid] > 0) {
      right = mid + 1
    } else {
      left = mid + 1
    }
  }
  // left is the index of the first positive number
  const positiveCount = n - left

  // find the last negative using binary search
  left = 0
  right = n - 1
  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    if (nums[mid] < 0) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  // right is the index of the last negative number
  const negativeCount = right + 1

  return Math.max(positiveCount, negativeCount)
}
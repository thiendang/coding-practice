/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  nums.sort((a, b) => a - b);

  if (nums[0] < k) return -1;

  let count = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] > k) {
      count += 1;
      while (i + 1 < nums.length && nums[i] == nums[i + 1]) {
        i += 1;
      }
    }
    i += 1;
  }
  return count;
  
};

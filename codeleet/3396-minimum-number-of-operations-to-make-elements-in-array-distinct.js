/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  const n = nums.length
  
  for (let op = 0; op * 3 <= n; op++) {
      let start = op * 3
      const seen = new Set();
      let hasDuplicate = false;

      for (let i = start; i < n; i++) {
          if (seen.has(nums[i])) {
              hasDuplicate = true
              break
          }
          seen.add(nums[i])
      }

      if (!hasDuplicate) return op;
  }

  return Math.floor(n / 3) + 1
};
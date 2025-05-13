/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
  // sort nums
  nums.sort((a, b) => a - b)

  // create a Set to search
  const numSet = new Set(nums)
  let maxStreak = -1

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]
    let streakLength = 1

    while (numSet.has(current * current)) {
      current = current * current
      streakLength++
    }

    if (streakLength >= 2) {
      maxStreak = Math.max(streakLength, maxStreak)
    }
  }

  return maxStreak
};
console.log(longestSquareStreak([4, 2, 16, 256])); // Output: 4
console.log(longestSquareStreak([1, 3, 5, 7]));    // Output: -1
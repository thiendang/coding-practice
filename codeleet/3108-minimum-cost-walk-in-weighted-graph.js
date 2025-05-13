/**
 * @param {number[]} nums
 * @return {number}
 */
var minFlipsToAllOnes = function(nums) {
  let flips = 0;
  let n = nums.length;

  for (let i = 0; i < n - 2; i++) {
      // Nếu gặp số 0 ở vị trí i, phải flip [i, i+1, i+2]
      if (nums[i] === 0) {
          nums[i] ^= 1;
          nums[i + 1] ^= 1;
          nums[i + 2] ^= 1;
          flips++;
      }
  }

  // Sau khi quét hết, nếu còn số 0 → không thể biến thành toàn 1
  for (let i = 0; i < n; i++) {
      if (nums[i] === 0) return -1;
  }

  return flips;
};

// **Test Cases**
console.log(minFlipsToAllOnes([0,1,1,1,0,0])); // Output: 3
console.log(minFlipsToAllOnes([0,1,1,1])); // Output: -1
console.log(minFlipsToAllOnes([0,0,0,0,0])); // Output: 2
console.log(minFlipsToAllOnes([1,1,1,1])); // Output: 0
console.log(minFlipsToAllOnes([1,0,1,0,1,0])); // Output: -1
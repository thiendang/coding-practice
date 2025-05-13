/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
  let left = 0, bitMask = 0, maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
      // Nếu có chung bit `1`, thu hẹp cửa sổ từ `left`
      while ((bitMask & nums[right]) !== 0) {
          bitMask ^= nums[left]; // Loại bỏ `nums[left]` khỏi bitMask
          left++;
      }

      // Thêm `nums[right]` vào cửa sổ hợp lệ
      bitMask |= nums[right];
      maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
  const n = nums.length;

  // Step 1: Tìm phần tử dominant của toàn bộ mảng
  let candidate = -1, count = 0;

  for (let num of nums) {
      if (count === 0) {
          candidate = num;
      }
      count += (num === candidate) ? 1 : -1;
  }

  // Xác nhận lại số lần xuất hiện
  let totalCount = 0;
  for (let num of nums) {
      if (num === candidate) totalCount++;
  }

  if (totalCount * 2 <= n) return -1; // Không có phần tử dominant

  // Step 2: Duyệt để tìm chỉ số tách
  let leftCount = 0;
  for (let i = 0; i < n - 1; i++) {
      if (nums[i] === candidate) leftCount++;

      let leftLength = i + 1;
      let rightLength = n - leftLength;
      let rightCount = totalCount - leftCount;

      if (leftCount * 2 > leftLength && rightCount * 2 > rightLength) {
          return i;
      }
  }

  return -1;
};
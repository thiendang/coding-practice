/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
  let n = nums.length;

  // Hàm kiểm tra nếu có thể làm nums về toàn 0 với `k` truy vấn đầu tiên
  function canMakeZeroArray(k) {
      let diff = new Array(n + 1).fill(0);

      // Áp dụng `k` truy vấn đầu tiên vào mảng chênh lệch `diff`
      for (let i = 0; i < k; i++) {
          let [left, right, val] = queries[i];
          diff[left] += val;
          if (right + 1 < n) diff[right + 1] -= val;
      }

      // Tính giá trị thực tế của nums sau `k` truy vấn bằng prefix sum
      let currVal = 0;
      for (let i = 0; i < n; i++) {
          currVal += diff[i]; // Cộng dồn chênh lệch
          if (currVal < nums[i]) return false; // Nếu còn số nào > 0, không thể làm `nums` toàn 0
      }

      return true;
  }

  // Nếu `nums` đã là Zero Array, trả về 0
  if (nums.every(num => num === 0)) return 0;

  let left = 1, right = queries.length;

  // Nếu không thể làm `nums` về 0 ngay cả với tất cả truy vấn, trả về -1
  if (!canMakeZeroArray(right)) return -1;

  // Tìm kiếm nhị phân trên `k`
  while (left < right) {
      let mid = Math.floor(left + (right - left) / 2);

      if (canMakeZeroArray(mid)) {
          right = mid; // Tìm giá trị nhỏ hơn
      } else {
          left = mid + 1; // Cần nhiều truy vấn hơn
      }
  }

  return left;
}
/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    if (k === 0) return 0

    let left = 1, right = Math.max(...candies)

    function canAllocate(mid) {
      let count = 0
      for (let candy of candies) {
        // đếm số phần có thể tạo ra từ đống này
        count += Math.floor(candy / mid)
      }
      // nếu tổng số phần lớn hơn hoặc bằng k thì có thể chia được
      return count >= k
    }

    let result = 0
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2)

      if (canAllocate(mid)) {
        result = mid // Lưu lại giá
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    return result
};
console.log(maximumCandies([5,8,6], 3)); // Output: 5
console.log(maximumCandies([2,5], 11));  // Output: 0
console.log(maximumCandies([10,15,20], 5)); // Output: 10
console.log(maximumCandies([7,4,5,9], 4)); // Output: 4
console.log(maximumCandies([1,2,3,4,10], 5)); // Output: 2
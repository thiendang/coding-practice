/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
  function canRobWithCapability(X) {
    let count = 0,
      i = 0;
    while (i < nums.length) {
      if (nums[i] <= X) {
        count++;
        i += 2;
      } else {
        i++;
      }
    }

    return count >= k;
  }

  let left = Math.min(...nums);
  let right = Math.max(...nums);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canRobWithCapability(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(minCapability([2,3,5,9], 2)); // Output: 5
console.log(minCapability([2,7,9,3,1], 2)); // Output: 2
console.log(minCapability([1,2,3,4,5,6,7,8,9], 3)); // Output: 3
console.log(minCapability([10,10,10,10,10], 2)); // Output: 10
console.log(minCapability([4,2,8,3,6], 3)); // Output: 3
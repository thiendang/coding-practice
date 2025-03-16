/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var minRepairTime = function(ranks, cars) {
  let left = 1;
  let right = Math.max(...ranks) * cars * cars; // Giới hạn trên của thời gian

  // Hàm kiểm tra nếu có thể sửa `cars` xe trong `mid` phút
  function canRepairWithinTime(mid) {
      let totalCars = 0;
      for (let r of ranks) {
          totalCars += Math.floor(Math.sqrt(mid / r)); // Số xe mà thợ sửa được
          if (totalCars >= cars) return true; // Đủ xe rồi thì dừng sớm
      }
      return false;
  }

  // Binary Search tìm thời gian tối thiểu `T`
  while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (canRepairWithinTime(mid)) {
          right = mid; // Nếu sửa được, thử tìm thời gian nhỏ hơn
      } else {
          left = mid + 1; // Nếu không đủ xe, cần thêm thời gian
      }
  }

  return left;
};

// **Test Cases**
console.log(minRepairTime([4,2,3,1], 10)); // Output: 16
console.log(minRepairTime([5,1,8], 6)); // Output: 16
console.log(minRepairTime([2,3,7], 5)); // Output: ?
console.log(minRepairTime([1,1,1,1], 4)); // Output: 1
console.log(minRepairTime([10,20,30], 15)); // Output: ?
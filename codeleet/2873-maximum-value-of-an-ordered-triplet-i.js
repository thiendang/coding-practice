var maximumTripletValue = function(nums) {
  let maxTriplet = 0;
  let maxElement = nums[0];
  let maxDiff = -Infinity;

  for (let j = 1; j < nums.length - 1; j++) {
      maxDiff = Math.max(maxDiff, maxElement - nums[j]);
      maxTriplet = Math.max(maxTriplet, maxDiff * nums[j + 1]);
      maxElement = Math.max(maxElement, nums[j]);
  }

  return Math.max(maxTriplet, 0);
};
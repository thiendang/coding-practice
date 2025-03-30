/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const last = {};
  const result = [];

  for (let i = 0; i < s.length; i++) {
    last[s[i]] = i;
  }

  let left = 0,
    right = 0;
  for (let i = 0; i < s.length; i++) {
    right = Math.max(right, last[s[i]]);
    if (i === right) {
      result.push(right - left + 1);
      left = i + 1;
    }
  }

  return result;
};

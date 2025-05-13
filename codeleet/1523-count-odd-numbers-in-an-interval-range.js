/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  // check low is odd or not. If not, increment by 1 to make odd
  if (low % 2 === 0) {
    low++
  }

  // check high is odd or not. If not, decrement by 1 to make odd
  if (high % 2 === 0) {
    high--
  }

  return (high - low) / 2 + 1
}
// var low = 3, high = 7
var low = 8, high = 10
console.log(countOdds(low, high));

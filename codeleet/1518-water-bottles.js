/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 * 2 vòng lặp: 1 cho uống nước, 1 cho đổi nước
 */
var numWaterBottles = function(numBottles, numExchange) {
  let result = 0
  let emptyBottles = 0

  // first drink
  emptyBottles = numBottles
  result += numBottles

  while (emptyBottles >= numExchange) {
    // exchange
    numBottles = Math.floor(emptyBottles / numExchange)
    emptyBottles = emptyBottles % numExchange
    
    // drink
    emptyBottles += numBottles
    result += numBottles
  }

  return result
};
var numBottles = 15, numExchange = 4
console.log(numWaterBottles(numBottles, numExchange)) // 19
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  const map = { 'a': 0, 'b': 0, 'c': 0}
  let result = 0, left = 0
  
  for (let right = 0; right < s.length; right++) {
    map[s[right]]++
    
    while (map['a'] > 0 && map['b'] > 0 && map['c'] > 0) {
      result += s.length - right
      map[s[left]]--
      left++
    }
    
  }

  return result
}
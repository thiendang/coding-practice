/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
  if (meetings.length === 0) return days

  // 1. Sorting meetings by start
  meetings.sort((a, b) => a[0] - b[0])

  let busy_days = 0
  let prev_start = meetings[0][0]
  let prev_end = meetings[0][1]

  for (let i = 1; i < meetings.length; i++) {
    let [start, end] = meetings[i]

    if (start <= prev_end) {
      prev_end = Math.max(prev_end, end)
    } else {
      busy_days += (prev_end - prev_start + 1)
      prev_start = start
      prev_end = end
    }
  }

  busy_days += (prev_end - prev_start + 1)

  return days - busy_days
};

var days = 10, meetings = [[5,7],[1,3],[9,10]];
console.log(countDays(days, meetings))

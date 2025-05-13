/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
  const monthMap = {
      "Jan": "01",
      "Feb": "02",
      "Mar": "03",
      "Apr": "04",
      "May": "05",
      "Jun": "06",
      "Jul": "07",
      "Aug": "08",
  }
  
  if (date.length === 12) {
    date = "0" + date
  }

  // "20th Oct 2052"
  const year = date.slice(9)
  const month = monthMap[date.slice(5, 8)]
  const day = date.slice(0, 2)

  return year + "-" + month + "-" + day
}

var date = "6th Jun 1933"
console.log(reformatDate(date));

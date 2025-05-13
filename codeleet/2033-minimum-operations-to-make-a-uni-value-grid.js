/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */

var minOperations = function(grid, x) {
    const m = grid.length
    const n = grid[0].length
    const baseReminder = grid[0][0] % x
    const values = [] // spaces: O(m * n)

    // iterate grid. O(m * n)
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        const val = grid[i][j]

        if (val % x !== baseReminder) return -1
        values.push(val)
      }
    }

    // find median
    values.sort() // O(n log n) with n = m * n
    const median = values[Math.floor(values.length / 2)]

    // iterate values
    let operations = 0
    for (const val of values) {
      operations += Math.abs(val - median) / 2
    }

    return operations
};
// m = 2, n = 2
// baseReminder = 0
// (val % x) !== baseReminder => return -1
// values = [val1, val2,.....] => find median
// iterate values => operations += (val - median) / x

var grid = [[2,4],[6,8]], x = 2;
console.log(minOperations(grid, x))

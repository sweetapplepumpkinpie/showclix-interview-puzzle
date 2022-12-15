const init = (rowsNum, cols, reserved) => {
  const grid = Array(rowsNum)
    .fill(1)
    .map(() => Array(cols).fill(false))
  const rows = Array(rowsNum)
    .fill(1)
    .map(() => [])

  // Register only reserved positions
  reserved.map((item) => {
    const [row, col] = item.replace("R", "").split("C")
    grid[row - 1][col - 1] = true
    rows[row - 1].push(col - 1)
    rows[row - 1].sort()
  })

  const colLength = grid[0].length
  const middle = Math.floor(colLength / 2)

  // Get the Manhattan Distance of each position
  const distances = grid.map((col, colIndex) =>
    col.map((item, index) => {
      if (colLength % 2 === 0) {
        return (index < middle ? middle - index - 1 : index - middle) + colIndex
      } else {
        return Math.abs(middle - index) + colIndex
      }
    })
  )
  return {
    distances,
    rows,
  }
}

module.exports = { init }

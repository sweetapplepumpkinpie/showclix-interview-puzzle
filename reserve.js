const getPossible = (row, count, distances) => {
  let min = -1,
    colIndex

  for (let i = 0; i <= row.length; i++) {
    let num1, num2
    if (i == 0) {
      num1 = -1
      num2 = row[i]
    } else if (i === row.length) {
      num1 = row[i - 1]
      num2 = distances.length
    } else {
      num1 = row[i - 1]
      num2 = row[i]
    }

    while (num2 - num1 > count) {
      let sum = 0
      for (let j = num1 + 1; j <= num1 + count; j++) {
        sum += distances[j]
      }
      num1++
      if (min < 0 || min > sum) {
        min = sum
        colIndex = num1
      }
    }
  }
  return { tempMin: min, col: colIndex }
}

const reserve = (map, count) => {
  let min = -1,
    minRow,
    minColStart
  const rows = map.rows
  const colLength = map.distances[0].length
  if (count) {
    for (let i = 0; i < rows.length; i++) {
      if (colLength - rows[i].length > count) {
        // Get good positions for each row.
        const { tempMin, col } = getPossible(rows[i], count, map.distances[i])

        // Get the best positions.
        if (min < 0 || min > tempMin) {
          min = tempMin
          minRow = i
          minColStart = col
        }
      }
    }
    if (minColStart !== undefined) {
      for (let k = minColStart; k < minColStart + count; k++) {
        map.rows[minRow].push(k)
      }
      map.rows[minRow].sort()

      return count > 1
        ? `R${minRow + 1}C${minColStart + 1} - R${minRow + 1}C${
            minColStart + count
          }`
        : `R${minRow + 1}C${minColStart + 1}`
    } else {
      return "Not Available"
    }
  } else {
    const total = map.distances.length * map.distances[0].length
    let reserved = 0

    map.rows.map((row) => {
      reserved += row.length
    })
    return total - reserved
  }
}

module.exports = {
  reserve,
}

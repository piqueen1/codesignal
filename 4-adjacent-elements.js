function adjacentElementsProduct(inputArray) {
  let max = inputArray[0]*inputArray[1]
  for (let i=1; i<inputArray.length - 1; i++) {
      let current = inputArray[i]*inputArray[i+1]
      if (current > max) {
          max = current
      }
  }
  
  return max
}

console.log(adjacentElementsProduct([-23, 4, -3, 8, -12]))

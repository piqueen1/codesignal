function adjacentElementsProduct(inputArray) {
  let max = 0
  for (let i=0; i<inputArray - 1; i++) {
      let current = inputArray[i]*inputArray[i+1]
          console.log(i)
      if (current > max) {
          console.log(current)
      }
  }
  
  return max
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))

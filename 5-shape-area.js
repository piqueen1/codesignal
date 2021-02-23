// https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ

function shapeArea(n) {
   const base = 1
   let current = shapeArea(n-1) + 4*(n-1)
   return current
  }

  console.log(shapeArea(5)) // 41

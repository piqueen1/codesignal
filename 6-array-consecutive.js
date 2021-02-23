// https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC

function makeArrayConsecutive2(statues) {
 const max = Math.max(...statues)
 const min = Math.min(...statues)
 const filledLength = max - min
 return filledLength - statues.length + 1
}

console.log(makeArrayConsecutive2([6, 2, 3, 8])) // 3

// https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG

const almostIncreasingSequence = sequence =>{
  // element to remove to have increasing sequence
  let count = 0;

  for(let i=0; i< sequence.length; i++){

    // check 1 : n is smaller or equal to n-1
    if(sequence[i] <= sequence[i-1]){
      count++;
      // n is smaller or equal to n-2 and n+1 is smaller or equal to n-1
      if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]){
        count++;
      }
    }
  }

  // return true with 1 or no remove, otherwise false
  return count <= 1;
}


function range(start, end, step) {
  let result = []
  if(start !== undefined && end !== undefined && step !== undefined && start < end && step >0) {
    while(start <= end) {
      result.push(start);
      start += step;
    }
  } else {
    result = [];
  }
  return result;
}


console.log(range(3,35,4));

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

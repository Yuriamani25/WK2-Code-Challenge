//creating a function
function range(start, end) {//prime number check          
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  //input
  var result = range(9, 18); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  //output
  console.log(result);
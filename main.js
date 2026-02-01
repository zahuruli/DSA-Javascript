//basic recursion:

// function myFunction(x) {
//   console.log(x);
//   if (x < 10) {
//     myFunction(x + 1);
//   }
// }
// let data = 0;
// myFunction(0);

//factorial calculation by recursion:

function factorial(x) {
  if (x == 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

console.log(factorial(5));

let array1 = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77];
let array2 = [3, 7, 12, 34, 63, 9, 0, 45, 67, 8];
let array3 = [];

let d1 = 0;
let d2 = 0;
let d3 = 0;

while (d1 < array1.length && d2 < array2.length) {
  if (array1[d1] < array2[d2]) {
    array3[d3] = array1[d1];
    d1++;
  } else {
    array3[d3] = array2[d2];
    d2++;
  }
  d3++;
}

while (d1 < array1.length) {
  array3[d3] = array1[d1];
  d1++;
  d3++;
}
console.log(array3);

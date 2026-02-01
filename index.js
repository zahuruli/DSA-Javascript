let array1 = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77];
let array2 = [3, 7, 12, 34, 63, 9, 0, 45, 67, 8];
let array3 = [];

for (let i = 0; i < array1.length; i++) {
  array3[i] = array1[i];
}
for (let i = 0; i < array2.length; i++) {
  array3[array1.length + i] = array2[i];
}
console.log(array3);

//in builtin method easily can do with concat  or ... spread operator
let array4 = array1.concat(array2);
let array5 = [...array1, ...array2];
console.log(array4);
console.log(array5);

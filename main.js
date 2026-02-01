// let shortedArray = data.sort((a, b) => a - b).reverse();
// console.log(shortedArray);
let data = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77];
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    if (data[j] > data[j + 1]) {
      temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}
console.log(data);

let data = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77];
console.log(data);
function CustomReverse(start, end) {
  if (start <= end) {
    tepm = data[start];
    data[start] = data[end];
    data[end] = tepm;
    CustomReverse(start + 1, end - 1);
  }
}
CustomReverse(0, data.length - 1);
console.log(data);

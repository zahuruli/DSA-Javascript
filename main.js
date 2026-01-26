function deleteElement(position) {
  let data = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77];
  console.log(data);
  for (let i = position; i < data.length - 1; i++) {
    data[i] = data[i + 1];
  }
  data.length = data.length - 1;
  console.log(data);
}

deleteElement(3);

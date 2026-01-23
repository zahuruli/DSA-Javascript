function insertElement() {
  let array = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77];
  let newEl = document.getElementById("newEl").value;
  newEl = parseInt(newEl);
  let position = document.getElementById("position").value;
  console.log(array);
  for (let i = array.length - 1; i >= 0; i--) {
    if (i >= position) {
      array[i + 1] = array[i];
      if (i == position) {
        array[i] = newEl;
      }
    }
  }
  console.warn(array);
}

// in js array methods its called splice(position,NumOfDeletemement,insertEle)

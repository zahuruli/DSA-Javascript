let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let len = data.length;

function insertValue() {
  let pos = parseInt(document.getElementById("position").value);
  let num = parseInt(document.getElementById("number").value);
  if (!typeof pos == "number" || isNaN(pos)) {
    alert(`position ${pos} is not a number`);
  }
  if (!typeof num == "number" || isNaN(num)) {
    alert(`Given input of number ${pos} is not  a type of number!`);
  } else if (pos < len) {
    for (let i = len - 1; i >= 0; i--) {
      if (i >= pos) {
        data[i + 1] = data[i];
      }
      if (i == pos) {
        data[i] = num;
        console.log(data);
        return data;
      }
    }
  } else {
    data[pos] = num;
    console.log(data);
  }
}

function spliceValue() {
  let pos = parseInt(document.getElementById("position").value);
  let num = parseInt(document.getElementById("number").value);
  let splicedData = data.toSpliced(pos, 0, num);
  console.log(splicedData);
}
function resetValue() {
  document.getElementById("position").value = "";
  document.getElementById("number").value = "";
}

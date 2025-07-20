let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let len = data.length;

function removeElement() {
  let pos = parseInt(document.getElementById("position").value);
  if (!typeof pos == "number" || isNaN(pos)) {
    alert(`position ${pos} is not a number`);
  } else if (pos < len) {
    for (let i = pos; i < len; i++) {
      data[i] = data[i + 1];
    }
    data.length = data.length - 1;
    console.log(data);
  } else {
    alert(`position ${pos} is not valid`);
  }
}

function resetValue() {
  document.getElementById("position").value = "";
  document.getElementById("number").value = "";
}

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 6, 7];
let len = data.length;
let pos = undefined;

function searchElement() {
  //if not found return undefined
  let val = parseInt(document.getElementById("val").value);
  if (!typeof val == "number" || isNaN(val)) {
    alert(`value ${val} is not a number`);
  } else {
    for (let i = 0; i < len; i++) {
      if (data[i] === val) {
        pos = i;
        break;
      }
    }

    console.log(`Index is ${pos}`);
    alert(`Index is ${pos}`);
    document.getElementById("val").value = "";
  }
}

function resetValue() {
  document.getElementById("val").value = "";
}

//builtin indexOf:
function indexOf() {
  //if not found return -1

  let val = parseInt(document.getElementById("val").value);

  let index = data.indexOf(val);
  console.log(`Index is ${index}`);
  alert(`Index is ${index}`);
  document.getElementById("val").value = "";
}

//builtin indexOf:
function findIndex() {
  //if not found return -1

  let val = parseInt(document.getElementById("val").value);

  let index = data.findIndex((v) => v === val);
  console.log(`Index is ${index}`);
  alert(`Index is ${index}`);
  document.getElementById("val").value = "";
}
//builtin indexOf:
function findLastIndex() {
  //if not found return -1

  let val = parseInt(document.getElementById("val").value);

  let index = data.findLastIndex((v) => v === val);
  console.log(`Index is ${index}`);
  alert(`Index is ${index}`);
  document.getElementById("val").value = "";
}

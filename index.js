let data = [];
let currentSize = 0;
let max = 5;

function PushElement(e) {
  if (currentSize <= max) {
    data[currentSize] = e;
    currentSize++;
  } else {
    console.log("Stack is full");
  }
}

function PopElement() {
  if (currentSize > 0) {
    let lastRemoveItems = data[currentSize - 1];
    currentSize -= 1;
    data.length = currentSize;
    return lastRemoveItems;
  } else {
    console.log("Stack is empty!");
  }
}

function ReverseStr(item) {
  for (let i = 0; i < item.length; i++) {
    PushElement(item[i]);
  }
  for (let i = 0; i < item.length; i++) {
    let rmvItem = PopElement();
    item[i] = rmvItem;
  }
}

let MyName = "zahurul";
let str = MyName.split("");

ReverseStr(str);
console.log(str);

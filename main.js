let data = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77];
let index = undefined;
function searchElementIndex(el) {
  console.log(data);
  for (let i = 0; i <= data.length - 1; i++) {
    if (data[i] == el) {
      index = i;
      break;
    }
  }
  if (index == undefined) {
    console.log(`Element not found`);
  } else {
    console.log(`Element ${el} found at position ${index}`);
  }
}
console.log(data.indexOf(0));
searchElementIndex(0);

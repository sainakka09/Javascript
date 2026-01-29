let arr = [2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
  if (i === 2) {
    continue;
  }
  if (i === 4) {
    break;
  }
  console.log(arr[i]);
}
const obj = { a: 1, b: 2, c: 3, d: 4 };
for (let key in obj) {
  if (key === "c") {
    break;
  }
  if (key === "b") {
    continue;
  }
  console.log(obj[key]);
}

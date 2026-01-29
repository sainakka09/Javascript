function displayEven(array) {
  for (const e in array) {
    if (e % 2 == 0) {
      console.log(e);
    }
  }
}
function displayOdd(array) {
  for (const e in array) {
    if (e % 2 != 0) {
      console.log(e);
    }
  }
}
displayEven([1, 2, 3, 4, 5, 6, 7, 8, 9]);
displayOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]);

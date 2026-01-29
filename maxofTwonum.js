function maxNum(num1, num2) {
  return num1 >= num2 ? num1 : num2;
}
console.log(maxNum(2, 3));

function yo(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("FIZZBUZZ");
  } else if (num % 3 == 0) {
    console.log("FIZZ");
  } else if (num % 5 == 0) {
    console.log("BUZZ");
  } else {
    console.log(num);
  }
}
yo(10);

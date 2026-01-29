let number = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum = sum + number[i];
}
console.log(sum);

//=========== while loop =====//
let i = 0;
let sum1 = 0;
while (i < number.length) {
  sum1 = sum1 + number[i];
  i++;
}
console.log(sum);

//========do-while======/
let i1 = 0;
let sum2 = 0;
do {
  sum2 = sum2 + number[i1];
  i1++;
} while (i1 < number.length);
console.log(sum2);

//===========infinite loops=====//
// while (true) {
//   console.log("true");
// }

// ======== for-in ======= used to iterate through keys of the javascript object//
let a = {
  name: "sai",
  time: 2,
  dob: 19052005,
};
for (const key in a) {
  console.log(a[key]);
  console.log(key);
}

//=========for-of======== used to iterate over an array to access an element//
let arr = [2, 3, 4, 5, 6];
for (let element of arr) {
  console.log(element);
}

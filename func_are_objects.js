function add(num1, num2) {
  return num1 + num2;
}
const n = add;
console.log(n(2, 3));
console.log(add.length);
function pro(name) {
  this.name = name;
  this.write = function () {
    console.log("Write");
  };
}
console.log(pro.length);

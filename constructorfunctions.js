//Factory functions provide an effient way to create an object
// function getdog(name, breed, age) {
//   return {
//     name: name,
//     breed: breed,
//     age: age,
//     eat: function () {
//       console.log("sai");
//     },
//     bark() {
//       console.log("Woof");
//     },
//   };
// }
//constructor functions are used to instantiate objects in javascript
function dog(name, breed, age) {
  // this = {};
  //add properties
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.eat = function () {
    console.log("Save");
  };
  this.bark = function () {
    console.log("Woof");
  };

  // return this
}
const bedog = new dog("sai", "babe", 9);
console.log(bedog);

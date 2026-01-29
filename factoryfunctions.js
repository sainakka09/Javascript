const dog = {
  name: "babe",
  breed: "rottweiler",
  age: 5,
  eat: function () {
    console.log("sai");
  },
  bark() {
    console.log("Woof");
  },
};
//Factory functions provide an effient way to create an object
function getdog(name, breed, age) {
  return {
    name: name,
    breed: breed,
    age: age,
    eat: function () {
      console.log("sai");
    },
    bark() {
      console.log("Woof");
    },
  };
}
let anotherdog = getdog("naddy", "dober", 6);
console.log(anotherdog);

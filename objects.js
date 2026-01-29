// objects are nouns used in javascript to group similar values or related values. it contains state and behaviour
// an object is fundamental datatype in javascript that allows you to store the key value pairs, its a referenece type
let course = {
  name: "javascript",
  time: 1,
};
console.log(course);
console.log(course.name);
console.log(course.time);
course.name = "javascript fundamenmtals";
console.log(course.name);

// using bracket notation
console.log(course["name"]);
course["name"] = "java";
console.log(course["name"]);

let property = "time";
console.log(course[property]);

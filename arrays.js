// arrays are data structure in javascript that allow you to store list of data
let colors = ["a", "b"];
console.log(colors);
console.log(colors[0]);
console.log(colors[1]);
colors[0] = 23;
console.log(colors[0]);
console.log(typeof colors);
console.log(colors.length); //finding length
console.log(typeof colors);
colors.unshift("d");
console.log(colors)

let marks = [2,3,4,5,6,7,7,8,8,9];
for(const e in marks){
    console.log(marks[e]);
}

for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}

const str = "sainakka"; // Strings are immutable in javascript
for(const e in str){
    console.log(str[e]);
}
let cities = ["vijayawada","tatanagar","guntur","pvd","bengaluru","chennai"]
for(const e of cities){
    console.log(e.toUpperCase());
}

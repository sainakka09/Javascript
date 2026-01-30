//push method = push() add at the end
let marks= [2,3,4,5];
marks.push(98);
console.log(marks);

let del = marks.pop(); //delete at end
console.log(del);
console.log(marks);

console.log(marks.toString()) // convert to a string
let mar = [34,5,6,77,778,99];

let all = marks.concat(mar) // used to join two arrays
console.log(all);

//shift() delete at start
let dell = mar.shift()
console.log(dell);
console.log(mar);

//slice(start_index, end_index) retruns a piece of the array
let sll = mar.slice(2,4);
console.log(sll);

// splice() it changes the original array
//splice(start_index, del_count, new_element)
let arr2 = [2,3,4,5,6,7];
// add element
arr2.splice(2,0,46);
console.log(arr2)
// delete element
arr2.splice(0,1);
console.log(arr2);
//replace an element
arr2.splice(3,1,23);
console.log(arr2)

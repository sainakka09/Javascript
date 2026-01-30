//=========Higher ordewr fucntion are the type of  fucntion which take a function as a argumne to another function===========// 
let arr = [1,2,3,4,5,6];
arr.forEach(function printVal(val){
    console.log(val)
})

arr.forEach((val)=>{
    console.log(val)
})

let arr1  = [22,34,33];
function calcSquare(val){
    console.log(val*val);
}
arr1.forEach(calcSquare)
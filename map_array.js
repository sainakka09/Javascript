//===================Map() creates a new array with the result of some operation. the value its callback returns are used to form a new array===//
let  arr = [1,2,3,4,5,6,7];
arr.map((val)=>{
    console.log(val)
})
let neweArr= arr.map((val)=>{
    return val
})
console.log(neweArr)
 
//for each os used to print or accees a elements in the array
//map fucntion is used to create an new array using the returned vales
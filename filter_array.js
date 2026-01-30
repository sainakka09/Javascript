// =============filter is used to filter the array based on some condition======/
let arr= [1,2,3,4,5,6,7,8,9,8,7,6,6];
let newArr = arr.filter((val)=>{
    return val%2===0;
})
console.log(newArr)
let ans = [null,"",1,2,3];
let newAns = ans.filter((val)=>{
    return typeof val ==="number";
})
console.log(newAns)
//=============finding an element=========//
console.log(ans.includes(4));

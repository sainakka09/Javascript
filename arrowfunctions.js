//=================Arrow Functions=========//
const sum = (num1,num2)=>{
    return num1+num2;
}
let val = sum(9,3);
console.log(val);

const mul = (num1,num2)=>{
    return num1*num2;
}
let val2 = mul(45,2);
console.log(val2)

const printHello = ()=>{
    console.log("Hello")
}
printHello();

//function for returning vowels
function vowel(str){
    count = 0;
    for(let a of str){
        if(a==="a" || a==="e" || a==="o" || a==="i" || a==="u"){
            count++
        }
    }
    console.log(count)    
}
vowel("sainakka");
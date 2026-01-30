// sequence of characters used to represent characters

//String interpolation is a process of adding expression in string that we can use with template literals
let srt = "sai";
console.log(srt.length);
console.log(srt[1]);

//Template Literals
let senSpecial =`Sai`;
console.log(`the special string is ${senSpecial}`)

let obj = {
    item:"pen",
    price:10
}
console.log(`the cost of the ${obj.item} is ${obj.price} rupees.`)
//=====escape characters====//
// \n for new line
// \t for tab space
console.log("sai \nNakka")
console.log("sai \t Nakka")
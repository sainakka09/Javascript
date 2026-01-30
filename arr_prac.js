//========Q1======//
let marks = [85,97,44,37,76,60];
let sum = 0;
for(const e of marks){
    sum = sum+e;
}
let avg = sum/marks.length
console.log(`the average marks of the class is ${avg}`)

//============Q2============//
let pr = [250,645,300,900,50];
let final= [];
for(let i = 0;i<pr.length;i++){
    offer = pr[i]/10;
    pr[i]=pr[i]-offer;
    final[i]= pr[i];
}
console.log(final)
// let arr=[7,9,0,-2];
// let n=3;
// let ans=arr.slice(0,n);
// question 04
// let ans2=arr.slice(arr.length-n);

// question 03
// let str=prompt("enter string:")
// if(str.length==0){
//     console.log("string is blank");
// }
// else{
//     console.log("string is not blank.");

// }

// question 04
// let char="Amaan";
// let idx=2;
// if(char[idx]==char[idx].toLowerCase()){
//     console.log("Character is lowercase");

// }else{
//     console.log("character is uppercase");

// }

// question 05
let str = prompt("please enter a string");
console.log(`original string = ${str}`);
console.log(`string without spaces = ${str.trim()}`);

// question 06
let arr = ["hello", "a", 23, 64, 99, -6];
let item = 64;
if (arr.indexOf(item) != -1) {
  console.log("element exists in array");
} else {
  console.log("element doesn't exist in array");
}

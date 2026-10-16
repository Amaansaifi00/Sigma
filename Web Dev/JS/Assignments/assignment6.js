//Write a JavaScript function that returns array elements larger than a number.
// let arr=[1,3,5,3,6,10,5];
// let sum=5;

// function getElement(arr,sum){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>sum){
//             console.log(arr[i]);
//         }
//     }
// }
// getElement(arr,sum);

// Write a JavaScript function to extract unique characters from a string.
// let str="abcdabcdefgggh"
// function getUniquechar(str){
//     let ans="";
//     for(let i=0;i<str.length;i++){
//         let currChar=str[i];
//         if(ans.indexOf(currChar)==-1){
//             ans+=currChar;

//         }
//     }
//     return ans;
// }
// console.log(getUniquechar(str));

// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// let country=["Australia", "Germany", "United States of America"];
// let maxLen=0;
// let idx;
// function largestLen(arr,n){

//  for(let i=0;i<n;i++){
//     if(arr[i].length>maxLen){
//         maxLen=arr[i].length;
//         idx=i;
//     }
//   }
//   console.log(arr[idx]);

// }
// largestLen(country,country.length);

// Write a JavaScript function to count the number of vowels in a String argument
// let str = "abdgyfenjjvol";

// function vowelCount(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     // Fixed: charAt(i) or simply str[i]
//     if (
//       str.charAt(i) == "a" ||
//       str.charAt(i) == "e" ||
//       str.charAt(i) == "i" ||
//       str.charAt(i) == "o" ||
//       str.charAt(i) == "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }

// vowelCount(str);

//  Write a JavaScript function to generate a random number within a range (start,end).
let strat = 100;
let end = 200;
function randomNum(start, end) {
  let diff = end - start;
  console.log(Math.floor(Math.random() * diff) + start);
}
randomNum(100,200);

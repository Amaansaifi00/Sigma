//question 1
let num = 20;
if (num % 10 == 0) {
  console.log("Good");
} else {
  console.log("Bad");
}

//question 2
let name = prompt("Enter your usernamre:");
let age = prompt("Enter your age:");
alert(`${name} is ${age} years old`);

// question 3
let quater = 1;
switch (quater) {
  case 1:
    console.log("janaury", "february", "march");
    break;
  case 2:
    console.log("april", "may", "june");
    break;
  case 3:
    console.log("july", "august", "september");
    break;
  case 4:
    console.log("october", "november", "december");
    break;
  default:
    console.log("Invalid quater");
}

// question 4
let str = "Amaan";
if ((str[0] == "A" || str[0] == "a") && str.length >= 5) {
  console.log("string is golden");
} else {
  console.log("string is not golden");
}

// question 5
let a = 5;
let b = 6;
let c = 8;
if (a > b) {
  if (a > c) {
    console.log(a, "is largest");
  } else {
    console.log(c, "is largest");
  }
} else {
  if (b > c) {
    console.log(b, "is largest");
  } else {
    console.log(c, "is largest");
  }
}

// question 6
let num1 = 32;
let num2 = 47852;
if (num1 % 10 == num2 % 10) {
  console.log("num1 and num2 has same digit which is", num1 % 10);
}

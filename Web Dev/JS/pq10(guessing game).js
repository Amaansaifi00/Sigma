const max=prompt("Enter maximum Number:");

const random=Math.floor(Math.random()*max)+1;

let guess=prompt("guess the number:");
while(true){
    if(guess=="quite"){
        console.log("user quite");
        break;
        
    }
    if(guess==random){
        console.log("you are right, random number was",random);
        break;
    }else if(guess<random){
        guess=prompt("your guess is to small,please try large number");
        
    }else{
        guess=prompt("your guess is to large,please try samll number");
    }
    // else{
    //     guess=prompt("your guess is wrong. please try again");
    // }
}
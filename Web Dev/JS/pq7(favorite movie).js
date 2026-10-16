let favorite_movie="avenger endgame";
let guess=prompt("Guess movie");
while((guess!=favorite_movie)&&(guess!='quite')){
    guess=prompt("Wrong guess.Please try again")
}
if(guess==favorite_movie){
    console.log("Congrats!!");
    
}
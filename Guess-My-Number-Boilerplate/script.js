let secretNumber = Math.trunc(Math.random()*20)+1;

console.log("secretNumber",secretNumber);

let score = 20;
let highScore = 0;

const displayMessage = function(message){
  const check = document.querySelector('.message').textContent= message;
  console.log("check",check);
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log("guess",guess);
})

if(!guess)
{
  displayMessage("Invalid Input");
}
else if(guess == secretNumber )
{
  displayMessage("Correct Guess");
}

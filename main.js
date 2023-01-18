const getComputerChoice = function () {
    let randomChoice = ['rock', 'paper', 'scissor'];
    let randomChoiceIndex = Math.floor(Math.random() * randomChoice.length);
    return randomChoice[randomChoiceIndex]};

  function playRound(){
    let computerSelection = getComputerChoice(); 
    const callback = getComputerChoice();
    let playerInput = document.getElementById('playerInput').value;
    if (playerInput.toLowerCase() === computerSelection ) {
        console.log('Draw') }
    else if (playerInput.toLowerCase() === 'rock' && computerSelection ==='scissor'){
        console.log('The Machine chose Scissor. You win! Rock beats scissor') }
    else if (playerInput.toLowerCase() === 'paper' && computerSelection ==='rock') {
          console.log('The Machine chose Rock. You win! Paper beats Rock!')
        }
    else if (playerInput.toLowerCase() === 'scissor' && computerSelection ==='paper') {
          console.log('The Machine chose Paper. You win! Scissor beats Paper!')
        } 
     else if (playerInput.toLowerCase() === 'rock' && computerSelection === 'paper') {
          console.log('The Machine chose Paper. You lose :( Paper beats Rock')
        }
     else if (playerInput.toLowerCase() === 'paper' && computerSelection === 'scissor') {
          console.log('The Machine chose Scissor. You lose :( Scissor beats Paper')
        }
     else if (playerInput.toLowerCase() === 'scissor' && computerSelection === 'rock') {
          console.log('The Machine chose Rock. You lose :( Rock beats Scissor')
        }
     } 

     const myBtn = document.querySelector("#button");
     myBtn.addEventListener("click", ()=> {
         const callback = game();
     })


     function game() {
        for (let i = 0; i < 5; i++) {
            const callback = playRound();
        }
     }
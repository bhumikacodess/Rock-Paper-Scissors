    let score = JSON.parse(localStorage.getItem('score')) || {
        Wins:0,
        Losses:0,
        Tie:0
    };

    updateScore();

    function pickComputerMove(){
        let computerMove = '';
        let randomNumber = Math.random();
        if(randomNumber >= 0 && randomNumber < 1/3){
            computerMove = 'rock';
        }else if(randomNumber >= 1/3 && randomNumber < 2/3){
            computerMove = 'paper';
        }else if(randomNumber >= 2/3 && randomNumber < 1){
            computerMove = 'scissors';
        }
        return computerMove;

    }

    let isAutoPlay = false;
    let intervalId ;

    function autoPlay(){
        if(!isAutoPlay){
        intervalId = setInterval (() =>{
            const playerMove = pickComputerMove();
            playGame(playerMove);
        },1000);
            isAutoPlay = true;
            document.querySelector('.auto-play-button').innerHTML = 'Stop Playing';
        } else {
            clearInterval(intervalId);
            isAutoPlay = false;
            document.querySelector('.auto-play-button').innerHTML = 'Auto Play';
        }
    }



    document.querySelector('.rock-btn').addEventListener('click',()=>{
        playGame('rock');
    }
 );

   document.querySelector('.paper-btn').addEventListener('click',()=>{
        playGame('paper');
   }
 );


    document.querySelector('.scissors-btn').addEventListener('click',()=>{
        playGame('scissors');
    }
 );

    document.querySelector('.reset-button').addEventListener('click',()=>{
        resetScore();
}
);

    document.querySelector('.auto-play-button').addEventListener('click',()=>{
        autoPlay();
    }
 );


    document.body.addEventListener('keydown',(event)=>{
        if(event.key === 'r'){
            playGame('rock');
        }else  if(event.key === 'p'){
            playGame('paper');
        }else  if(event.key === 's'){
            playGame('scissors');
        }else if(event.key === 'a'){
            autoPlay();
        }else if(event.key === 'Backspace'){
            resetScore();
        }
    });
        
    


    
    function playGame(playerMove){
        let computerMove = pickComputerMove();
        
        let result = '';
        if(playerMove === 'rock'){
            if(computerMove === 'rock'){
                result = 'Tie';
                
            }else if(computerMove === 'paper'){
                result = 'You lose';
                
            }else if(computerMove === 'scissors'){
                result = 'You win';
                
            }
        }
        if(playerMove === 'paper'){
            if(computerMove === 'rock'){
                result = 'You win';
            }else if(computerMove === 'paper'){
                result = 'Tie';
            }else if(computerMove === 'scissors'){
                result = 'You lose';
            }
        }
        if(playerMove === 'scissors'){
            if(computerMove === 'rock'){
                result = 'You lose';
            }else if(computerMove === 'paper'){
                result = 'You win';
            }else if(computerMove === 'scissors'){
                result = 'Tie';
            }
        }

        if(result === 'You win'){
            score.Wins++;
        }else if(result === 'You lose'){
            score.Losses ++;
        }else if(result === 'Tie'){
            score.Tie++;
        }

        
        
        localStorage.setItem('score',JSON.stringify(score));

        updateScore();

        document.querySelector('.moves').innerHTML = `You <img src = "images/${playerMove}-emoji.png" class="move-icon"> - <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;

        document.querySelector('.display-result').innerHTML = `${result}`;

       
        

    }
    function updateScore(){
        document.querySelector('.show-score').innerHTML = `Wins: ${score.Wins}  Losses: ${score.Losses}  Tie: ${score.Tie}`;
        }

    function resetScore(){
         score ={
        Wins: 0,
        Losses:0,
        Tie:0
    };
  
        localStorage.removeItem('score');
          updateScore();
    }
        
    
   

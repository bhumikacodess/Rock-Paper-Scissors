    let score = JSON.parse(localStorage.getItem('score')) || {
        Wins:0,
        Losses:0,
        Tie:0
    };
    
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

        document
    
   
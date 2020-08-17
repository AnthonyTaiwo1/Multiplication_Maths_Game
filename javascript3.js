let playing = false;
let score;
let action;
let timeremaining;
let correctAnswer;

//If we click on the start/reset button
document.getElementById("startreset").onclick = function(){
    
    //If we are playing..
    
    if(playing == true){
        
    location.reload(); //reload page
        
    }else{ //If we are not playing..
        
        //Change mode to playing
        
        playing = true;
        
        //Set score to 0
        
        score = 0;
        document.getElementById("Scorevalue").innerHTML = score;
    
             //Show countdown box 
             timeremaining=60;
        
        show("timeremaining");
        
        
document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
            //Hide gameover box
        
            hide("gameover");
        
            //Change button to 'reset'
            
        document.getElementById("startreset").innerHTML = "Reset Game";
        
        //Start countdown
        
        startCountdown();
        
        //Generate  new Q&A
        
        generateQA();
        
    }
}
        // Clicking on an answer box
    for(i=1; i<5; i++){
        document.getElementById("box"+i).onclick = function(){
            //Check if we are playing
            if (playing == true){ //Yes
                if(this.innerHTML == correctAnswer){
                    //Correct Answer
                    
                        //increase score by 1
                        score++;
                    
document.getElementById("Scorevalue").innerHTML = score;
         //hide wrong box and show correct box
           hide("wrong");
           show("correct");
           setTimeout(function(){
           hide("correct");
            },1000);
                    
        //Generate new Q&A
        
        generateQA();
      }else{
       //Wrong Answer
           hide("correct");
           show("wrong");
           setTimeout(function(){
           hide("wrong");
            },1000);
        }
     }
}
    }

//FUNCTIONS

//Start Counter

const startCountdown=()=>{
    action = setInterval(function(){
        timeremaining -= 1;
        
     document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0){//Game Over
           stopCountdown();
           show("gameover");
     document.getElementById("gameover").innerHTML = "<p>Game over!</p><p>Your score is " + score + "</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            
    document.getElementById("startreset").innerHTML = "Start Game";
        }
     }, 1000);
}

//Stop Counter

const stopCountdown=()=>{ 
    clearInterval(action);
}

//Hide an element

const hide=(Id)=>{ 
    document.getElementById(Id).style.display = "none";
}

//Show an element

const show=(Id)=> { 
    document.getElementById(Id).style.display = "block"; 
}

//Generate questions and multiple answers (Q&A)

const generateQA=()=>{
    let x = 1+ Math.round(19*Math.random());
    let y = 1+ Math.round(19*Math.random());
    
    correctAnswer = x-y;
    document.getElementById("question").innerHTML = x + "-" + y;
    let correctPosition = 1+ Math.round(3*Math.random());
    
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //Fill one box with the correct answer
    
    //Fill other boxes with wrong answers
    let answers = [correctAnswer];
    
    for(i=1; i<5; i++){
        if(i != correctPosition) {
            let wrongAnswer
            do{
                wrongAnswer = (1+Math.round(19*Math.random()))-(1+Math.round(19*Math.random())); //A wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)

document.GetElementById("box"+i).innerHTML = wrongAnswer;
        answers.push(wrongAnswer);
        }
    }

}
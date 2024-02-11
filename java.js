function playRound(playerSelection, computerSelection) {
    // your code here!
if(playerSelection=="rock"&& computerSelection=="feuille"){
    return 0;
}else if (playerSelection=="feuille"&&computerSelection=="sicau"){
    return 0;
}else if (playerSelection=="sicau"&& computerSelection=="rock"){
    return 0;
}else{
    return 1;
}
}
  
function getComputerChoice(){
    const result=Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if(result==1){
        return "feuille"
    }else if (result==2) {
        return "rock"
    } else {
        return "sicau"
    }
}
const h2=document.querySelector("h2");
const score=document.querySelector(".score");
const fin=document.querySelector("#fin");
let h3player = document.getElementById("player");
let h3bot = document.getElementById("bot");
var scoreplayer=0;
    var scorebot=0;
    let winner=0;



// function Gangne() {
//     if (scoreplayer==3){
//         h3player.textContent = "le Score du joeur est de : " + scoreplayer;h3bot.textContent = "le Score du lordinateur est de : " + scorebot;
//         alert("A GAGNER");
//        h3player.textContent = "le Score du joeur est de : " + scoreplayer;h3bot.textContent = "le Score du lordinateur est de : " + scorebot;
      
//     }else if (scorebot==3){
        
//         alert("A GAGNER");
//        h3bot.textContent = "le Score du lordinateur est de : " + scorebot;
//         h3player.textContent = "le Score du joeur est de : " + scoreplayer;
//     }
    
// }

function scoreparti(nbr){
    
    if (nbr==1){
        scoreplayer++;
        h3player.textContent = "le Score du joeur est de : " + scoreplayer;
       
    }else {
        scorebot++;
        h3bot.textContent = "le Score du lordinateur est de : " + scorebot;
    }
    
}

function jouer( ){
    
    const newitem=document.createElement("button");
    const imgElement = document.createElement("img");
     imgElement.style.width = "3%";
     newitem.innerText= 'PLAY AGAIN' ;
    if(scoreplayer<scorebot){
        imgElement.src= "./assets/Beaming Face with Smiling Eyes.png";
        h2.innerText="j'ai gagné ! ";
        
        h2.appendChild(imgElement);
        fin.appendChild(newitem);
        scorebot++;
        scoreplayer++;
    } else{
        imgElement.src= "./assets/Angry Face.png";
        h2.innerText="j'ai perdu ! " ;
        h2.appendChild(imgElement);
        fin.appendChild(newitem);
        scorebot++;
        scoreplayer++;
    }

    newitem.addEventListener('click', function () {
            fin.removeChild(newitem);
            h2.innerText="";
            scoreplayer=0;
            scorebot=0;
            winner=0;
            h3player.textContent = "le Score du joeur est de : " + scoreplayer;
            h3bot.textContent = "le Score du lordinateur est de : " + scorebot;
});
}


let boutonsicau = document.getElementById("ciseaux");
boutonsicau.addEventListener("click", function(event) {if(winner==0){
    const playerSelection = "sicau";
    const computerSelection =getComputerChoice() ;
    scoreparti(playRound(playerSelection, computerSelection));
    
    
} if(scoreplayer==5||scorebot==5){
    
        jouer();
        winner++;
    }
    }
    );
let boutonrock = document.getElementById("pierre");
boutonrock.addEventListener("click", function(event) {
 if(winner==0){
    const playerSelection = "rock";
    const computerSelection =getComputerChoice() ;
    scoreparti(playRound(playerSelection, computerSelection));
    
  } if(scoreplayer==5||scorebot==5) {
    
        jouer();winner++;
    }}
    
    );
let boutonfeuille = document.getElementById("feuille");
boutonfeuille.addEventListener("click", function(event) {if(winner==0){
    const playerSelection = "feuille";
    const computerSelection =getComputerChoice() ;
    scoreparti(playRound(playerSelection, computerSelection));
    
}
if(scoreplayer==5||scorebot==5){
    
        jouer();winner++;
    }}
    );







  
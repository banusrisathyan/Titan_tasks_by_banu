const choices =["rock","paper","scissors"];
const pd = document.getElementById("pd");
const cd = document.getElementById("cd");
const rd = document.getElementById("rd");

function playgame(playerchoice){
    const cc = choices[Math.floor(Math.random()*3)];
    console.log(cc);
    let result = "";

    if(playerchoice === cc){
        result="ITS A TIE!";
    }
    else{
        switch(playerchoice){
            case "rock":
                result=(cc==="scissors" )? "YOU WIN!!!" : "YOU LOOSE!!";
                break;
            case "paper":
                result=(cc==="rock")? "YOU WIN!!!" : "YOU LOOSE!!";
                break;
            case "scissors":
                result=(cc==="paper")? "YOU WIN!!!" : "YOU LOOSE!!";
                break;
        }
    }
    pd.textContent=`PLAYER:${playerchoice}`;
    cd.textContent=`Computer:${cc}`;
    
    rd.textContent=result;
    rd.classList.remove("green","red");

    switch(result){
        case "YOU WIN!!!":
            rd.classList.add("green");
            break;
        case "YOU LOOSE!!":
            rd.classList.add("red");
            break;
    }
}
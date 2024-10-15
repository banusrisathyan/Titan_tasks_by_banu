const display = document.getElementById("display");
function addtoDisplay(input){
    display.value += input;
}

function Clear(){
    const display = document.getElementById("display");
    display.value= " ";
}


function calculate(){
    try{display.value=eval(display.value)
    }
    catch(error){
        display.value = "Error";
    }
    }

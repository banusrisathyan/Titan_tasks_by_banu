let count = 0;
let inc = document.getElementById("increase");
let reset = document.getElementById("increase");
let dec = document.getElementById("increase");
let countLabel = document.getElementById("countNumber")
function icounter(){
    count++;
    countLabel.style.color = "#a122d5 "; 
    countLabel.innerHTML=count;  
}
function dcounter(){
    count--;
    countLabel.style.color = "#ee150e "; 
    document.getElementById("countNumber").innerHTML=count;  
}
function rcounter(){
    count=0;
    countLabel.style.color ="rgb(34, 100, 162)";
    document.getElementById("countNumber").innerHTML=count;  
}
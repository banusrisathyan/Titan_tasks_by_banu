let ftoc = document.getElementById("ftoc");
let ctof = document.getElementById("ctof");
let textbox = document.getElementById("textbox");
let result =document.getElementById("result");
const form = document.getElementById("form");
let temp;
console.log(textbox);
// form.addEventListener("submit",event=>{
//     event.preventDefault();
// })
function Convert(){
    if(ftoc.checked){
        temp=Number(textbox.value);
        temp= (5/9)*temp-32;
        result.innerHTML=`coverted temperature:${temp.toFixed(2)} C`;
    }
    else if(ctof.checked){
        temp=Number(textbox.value);
        temp=(9/5)*temp+32;
        result.innerHTML=`coverted temperature:${temp.toFixed(2)} F`;
    }
    else{
        temp=0;
        result.innerHTML=temp;
    }
}

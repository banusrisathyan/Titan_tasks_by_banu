const wF = document.querySelector(".wF");
const input = document.querySelector(".input");
const card = document.querySelector(".card");
const apikey = "730eda42f5280611741239e08e8a2aea";

wF.addEventListener("submit", async event =>{
    event.preventDefault();

    const city = input.value;

    if(city){
        try{
            const weatherdata = await getW(city);
            displayW(weatherdata);
        }
        catch(error){
            edisplay(error.message);
        }
    }
    else{
        edisplay("Please enter a city");
    }

});

async function getW(city){

    const apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiURL);

    console.log(response);

    if(!response.ok){
        throw new Error("Could not fecth weather");
    }
    return await response.json();
}

function displayW(data){

console.log(data);
const {name:city , 
    main:{temp,humidity},
    weather:[{ description ,id}]}= data;

    card.textContent="";
    card.style.display="flex";
    const cd =document.createElement("h1");
    const td =document.createElement("p");
    const hd =document.createElement("p");
    const dd =document.createElement("p");
    const wd =document.createElement("p");

    cd.textContent = city;
    td.textContent=`${(temp-273.15).toFixed(1)}°C`
    hd.textContent = `Humidity:${humidity}%`;
    dd.textContent = `${description}`;
    wd.textContent = getemojiW(id);

    cd.classList.add("cdisplay")
    cd.classList.add("tdisplay")
    hd.classList.add("hdisplay")
    dd.classList.add("ddisplay")
    wd.classList.add("wdisplay")

    card.appendChild(cd);
    card.appendChild(td);
    card.appendChild(hd);
    card.appendChild(dd);
    card.appendChild(wd);


}


 function getemojiW(id){

    switch(true){
        case(id>=200 && id <300):
        return "⛈️";
        case(id>=300 && id <400):
        return "🌧️";
        case(id>=500 && id <600):
        return "🌧️";
        case(id>=600 && id <700):
        return "❄️";
        case(id>=700 && id <800):
        return "🌫️";
        case(id===800):
        return "☀️";
        case(id>=801&&id<810):
        return "☀️";
        default:
            return "❌"
    }

}
function edisplay(mes){
    const edisplay = document.createElement("p");
    edisplay.textContent=mes;
    edisplay.classList.add("edisplay");

    card.textContent="";
    card.style.display ="flex";
    card.appendChild(edisplay);
}

// New York
// Los Angeles
// Chicago
// Houston
// London
// Paris
// Berlin
// Tokyo
// Sydney
// Cape Town
// Dubai
// Toronto
// Singapore
// Moscow
// Mumbai
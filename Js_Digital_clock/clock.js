function update(){
    const now = new Date();
    let hours = now.getHours().toString().padStart(2,0);
    const meridiem = hours >=12? "PM":"AM";
    jours = hours % 2 ||12;
    hours - hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const time = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").innerHTML=time;
}
update();
setInterval(update,1000);
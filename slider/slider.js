// image slider

const slides = document.querySelectorAll(".slides img");
let index = 0;
let interval = null;

// waiting for the dom to load elements and calling the functions
document.addEventListener("DOMContentLoaded",intializeSlider);

function intializeSlider(){

    if(slides.length>0){
        slides[index].classList.add("displaySlide");
        interval=setInterval(nextSlide,5000);
    }

}

function showSlide(newIndex){
    if (newIndex >= slides.length) {
        index = 0;
    } else if (newIndex < 0) {
        index = slides.length - 1;
    }
slides.forEach( slide =>{
        slide.classList.remove("displaySlide");
    })
    slides[index].classList.add("displaySlide");
}

function prevSlide(){
    index--;
    showSlide(index);
    clearInterval(interval);
}

function nextSlide(){
    index++;
    showSlide(index);
}
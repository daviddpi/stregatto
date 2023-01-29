window.addEventListener("DOMContentLoaded", () => {

    const testaGrab = document.querySelector(".testa-grab");
    const testa = document.querySelector(".testa");
    const eyes = document.querySelector(".eyes");

    const corpo = document.querySelector(".corpo");

    function visible(){
        corpo.classList.add("visible");
        corpo.classList.remove("hidden");
        
    }

    function hide(){
        corpo.classList.remove("visible");
        corpo.classList.add("hidden");

    }

    testaGrab.addEventListener("mouseenter" , visible);
    eyes.addEventListener("mouseenter" , visible);

    testa.addEventListener("mouseleave" , hide);


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    const stregatto = document.querySelector(".stregatto");

    setInterval(function() {
        stregatto.style.top = `${getRandomInt(15,85)}%`;
        stregatto.style.left = `${getRandomInt(5,95)}%`;

    }, 30000);
    


})
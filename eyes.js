window.addEventListener("DOMContentLoaded", () => {

    const eyeLeft = document.querySelector(".eye-left");
    const eyeRight = document.querySelector(".eye-right");

    function irisLeft(tag, mouseX, mouseY){

        let midEyeX = tag.getBoundingClientRect().left;
        let midEyeY = tag.getBoundingClientRect().top;


        let diffX = mouseX - midEyeX;
        let diffY = mouseY - midEyeY - window.pageYOffset;

        let angle = Math.atan2(diffY, diffX);


        let cappX = 2.5 * Math.cos(angle);
        let cappY = 2.5 * Math.sin(angle);

        const eyeTag = tag;

        cappX = cappX + 25;
        cappY = cappY + 25;

        eyeTag.style.left = cappX + "px";
        eyeTag.style.top = cappY + "px";

    }

    function irisRight(tag, mouseX, mouseY){

        let midEyeX = tag.getBoundingClientRect().left;
        let midEyeY = tag.getBoundingClientRect().top;


        let diffX = mouseX - midEyeX;
        let diffY = mouseY - midEyeY - window.pageYOffset;

        let angle = Math.atan2(diffY, diffX);


        let cappX = 2.5 * Math.cos(angle);
        let cappY = 2.5 * Math.sin(angle);

        const eyeTag = tag;

        cappX = cappX + 37;
        cappY = cappY + 32;

        eyeTag.style.left = cappX + "px";
        eyeTag.style.top = cappY + "px";

    }

    document.addEventListener("mousemove", function(e){
        irisLeft(eyeLeft, e.pageX, e.pageY);
        irisRight(eyeRight, e.pageX, e.pageY);

    })
    

});
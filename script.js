const buttons= document.querySelectorAll(".button");
const body= document.querySelector("body");
const text= document.querySelector("h1");
const text2= document.querySelector("h2");

buttons.forEach(function(clicky){
    clicky.addEventListener("click", function(e){
        if (e.target.id === "grey") {
            body.style.backgroundColor= e.target.id;
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor= e.target.id;
            text.style.color="black";
            text2.style.color="black";
        }
        if (e.target.id === "white") {
            body.style.backgroundColor= e.target.id;
            text.style.color="black";
            text2.style.color="black";
        }
        if (e.target.id === "blue") {
            body.style.backgroundColor= e.target.id;
            text.style.color="black";
            text2.style.color="black";
        }
        if (e.target.id === "black") {
            body.style.backgroundColor= e.target.id;
            text.style.color="white";
            text2.style.color="white";
        }
    })
})
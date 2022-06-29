const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const span = document.querySelector("#span")
const button1 = document.querySelector("#btn1");
const button2=document.querySelector("#btn2");


//logic for changing the colors in the browser
button1.addEventListener("click", function () {
    let randomhexColor = getrandomcolor();
    span.textContent = randomhexColor;
    document.body.style.backgroundColor = randomhexColor;


    //for copying the code using copycode button to the users clipboard
    button2.addEventListener("click",function(){
        navigator.clipboard.writeText(randomhexColor);
        })
    
});


//for generating the random hex color by running the loop six times
function getrandomcolor() {
    let hexcolor = '#';
    for (let i = 0; i < 6; i++) {
        hexcolor += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexcolor;
}
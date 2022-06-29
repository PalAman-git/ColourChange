let colorarray=["Red","Blue","Green","Pink","Orange","Purple","rgb(0, 179, 255)","#f4f6f3","#e5f6d4","goldenrod","#8DD8D2","#3A79DE","#F2C8E3","#f0a5c1"];
let ContainerEl=document.querySelector("#container");
const span=document.querySelector("#span")
const button1=document.querySelector("#btn1");
const button2=document.querySelector("#btn2");

//logic for changing the colors in the browser
button1.addEventListener("click",function(){ 
    let randomcolor=getrandomcolor();
    //changes the text according to the list item
    span.textContent=randomcolor;

    //changes the color of the body according to the array list
    document.body.style.backgroundColor=randomcolor;




    //for copying the code using copycode button to the users clipboard
    button2.addEventListener("click",function(){
    navigator.clipboard.writeText(randomcolor);
    })




});


//for generating the random color from the list of the array
function getrandomcolor(){
    return colorarray[Math.floor(Math.random()*colorarray.length)];
}

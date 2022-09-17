
let enlg = document.querySelector('carousel-item');
enlg.addEventListener("mouseover", enlargeitem);
function enlargeitem() {
    document.getElementById("cimg1").blur; 

 };

let header = document.getElementsByTagName('head');
header.addEventListener('mouseover', function () {
    header.body.style.background = "#f3f3f3 url('Archaea.png') no-repeat right top";
}

);

function zoom() {
    const body = document.getElementById("nvbr2");
  //  body.style.transform = "rotate(5deg)";
  //  body.style.backgroundSize  = "auto auto";
// body.style.transform = "translate(500px, 200px)";
};


function rotatefunction(){
    const rtb = document.getElementById("nvbr2");
    rtb.style.animation = "rotatelogo 4s 2";
    rtb.addEventListener("animationend", () => rtb.style.animation = "none");
};
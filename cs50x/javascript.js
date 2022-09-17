function rotatefunction() {
    const rtb = document.getElementById("nvbr2");
    rtb.style.animation = "rotatelogo 4s 1";
    rtb.addEventListener("animationend", restartfunction );
};

function restartfunction(){
    rtb.style.animation = "none";
};

function dt() {
    const d = new Date();
    document.getElementById("scriptdate").innerHTML = d;
}
function rotatefunction(){
    const rtb = document.getElementById("nvbr2");
    rtb.style.animation = "rotatelogo 4s 1";
    rtb.addEventListener("animationend", () => rtb.style.animation = "none");
};
let nextCounter = 0;
let previousCounter = 0;

function goNext() {
  if (nextCounter % 5 === 0) {
    document.getElementById("img5").style.visibility="hidden";
    document.getElementById("img4").style.visibility="visible";
  } else if (nextCounter % 5 === 1) {
    document.getElementById("img4").style.visibility="hidden";
    document.getElementById("img3").style.visibility="visible";
  } else if (nextCounter % 5 === 2) {
    document.getElementById("img3").style.visibility="hidden";
    document.getElementById("img2").style.visibility="visible";
  } else if (nextCounter % 5 === 3) {
    document.getElementById("img2").style.visibility="hidden";
    document.getElementById("img1").style.visibility="visible";
  } else if (nextCounter % 5 === 4) {
    document.getElementById("img1").style.visibility="hidden";
    document.getElementById("img5").style.visibility="visible";
  }
  nextCounter++;
  previousCounter+= 4;
}

function goPrev() {
  if (previousCounter % 5 === 0) {
    document.getElementById("img5").style.visibility="hidden";
    document.getElementById("img1").style.visibility="visible";
  } else if (previousCounter % 5 === 1) {
    document.getElementById("img1").style.visibility="hidden";
    document.getElementById("img2").style.visibility="visible";
  } else if (previousCounter % 5 === 2) {
    document.getElementById("img2").style.visibility="hidden";
    document.getElementById("img3").style.visibility="visible";
  } else if (previousCounter % 5 === 3) {
    document.getElementById("img3").style.visibility="hidden";
    document.getElementById("img4").style.visibility="visible";
  } else if (previousCounter % 5 === 4) {
    document.getElementById("img4").style.visibility="hidden";
    document.getElementById("img5").style.visibility="visible";
  }
  previousCounter++;
  nextCounter += 4;
}

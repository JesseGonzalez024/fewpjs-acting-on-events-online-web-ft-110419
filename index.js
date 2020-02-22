// Grabs the HTML Element
let dodger = document.getElementById("dodger");

// Sets the HTML element to a certain color
dodger.style.backgroundColor = "#FF69B4";

// 1. Declares a function 
function moveDodgerLeft() {
  
  
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNumber = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumber, 10);
  
   if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

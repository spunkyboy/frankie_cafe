let slideBegin = 1;
showSlidesTwo(slideBegin);

function plusSlidesTwo(b) {
  showSlidesTwo(slideBegin += b);
}

function currentSlideTwo(b) {
  showSlidesTwo(slideBegin = b);
}

function showSlidesTwo(b) {
  let i;
  let slidesFood = document.getElementsByClassName("myMenu");
  let dotsFood = document.getElementsByClassName("dot4");
  if (b > slidesFood.length) {slideBegin = 1}    
  if (b < 1) {slideBegin = slidesFood.length}
  for (i = 0; i < slidesFood.length; i++) {
    slidesFood[i].style.display = "none";  
  }
  for (i = 0; i < dotsFood.length; i++) {
    dotsFood[i].className = dotsFood[i].className.replace(" active", "");
  }
  slidesFood[slideBegin-1].style.display = "block";  
  dotsFood[slideBegin-1].className += " active";
}
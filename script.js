var slideList = document.querySelector(".slideWrap");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

var items = document.querySelectorAll("li").length;

let number = 1;
let startValue = 100;


function slideNext() {
  if (number < items) {
    slideList.style.left = `-${number * startValue}%`;
    // console.log(slideList.style.left);
    number++;
    if (number === items) {
      number--
    }
  }
}

next.addEventListener("click", () => {
  slideNext()
});

prev.addEventListener("click", () => {
  if (number > 0) {
    slideList.style.left = `-${(number - 1) * startValue}%`;
    // console.log(slideList.style.left);
    number--;
    if (number === 0) {
      number++
    }
  }
});

const autoPlay = setInterval(() => {
  slideNext();
}, 5000)

window.onload = autoPlay;
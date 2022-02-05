const sliderContainer = document.querySelector(".vSlider-container");
const sldierLeft = document.querySelector(".vLeftSlider");
const sldierRight = document.querySelector(".vRightSlider");
const downButton = document.querySelector(".downButton");
const upButton = document.querySelector(".upButton");
const slidesLength = sldierRight.querySelectorAll("div").length;

let activeSlideIndex = 0;
sldierLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;

  if (direction === "up") {
    activeSlideIndex++;

    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;

    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  sldierRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;

  sldierLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};

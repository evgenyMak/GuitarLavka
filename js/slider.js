const slider = document.querySelector(".products__slider-slider");

slider.addEventListener("wheel", (event) => {
  event.preventDefault();
  slider.scrollLeft += event.deltaY;
});

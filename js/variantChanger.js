const container = document.querySelector(".product__variants");
const mainImage = document.querySelector(".product__main-image");

container.addEventListener("click", (e) => {
  const target = e.target.closest(".product__variant");

  if (!target || target.classList.contains("product__variant--active")) return;

  const currentActive = container.querySelector(".product__variant--active");
  if (currentActive) {
    currentActive.classList.remove("product__variant--active");
  }

  target.classList.add("product__variant--active");

  if (target.src) {
    mainImage.src = target.src;
  }
});
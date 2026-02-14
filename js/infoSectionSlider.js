const tabs = document.querySelector(".product__tabs").children;
const infoSection = document.querySelector(".info-section");

let i = 0;
for (let tab of tabs) {
  i++;
  if (i == 1) SetCurrentSection(tab);

  tab.addEventListener("click", (e) => {
    e.preventDefault();
    SetCurrentSection(e.currentTarget);
  });
}

function SetCurrentSection(target) {
  document
    .querySelector(".product__tabs-btn.active")
    ?.classList.remove("active");
  target.classList.add("active");

  const nameForInfoSection = `.info-section__${target.innerText.toLowerCase().trim()}`;
  const newSection = document.querySelector(nameForInfoSection);
  const allSections = infoSection.querySelectorAll(".container > div");

  if (newSection) {
    newSection.style.display = "block";
    allSections.forEach((sec) => {
      if (sec !== newSection) {
        sec.style.display = "none";
      }
    });
  }
}

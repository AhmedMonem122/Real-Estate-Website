"use strict";

const accordionButtons = Array.from(
  document.querySelectorAll(".accordion-button")
);
const accordionIcons = Array.from(
  document.querySelectorAll(".accordion__icon")
);

accordionButtons.forEach((btn, i, arr) => {
  btn.addEventListener("click", () => {
    accordionIcons[i].classList.toggle("accordion__icon--is-open");
  });
});

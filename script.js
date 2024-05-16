// script.js
document.addEventListener("DOMContentLoaded", () => {
  const logoContainer = document.querySelector(".logo-container");

  logoContainer.addEventListener("mouseenter", () => {
    animateLeaves("in");
    animateText("in");
  });

  logoContainer.addEventListener("mouseleave", () => {
    animateLeaves("out");
    animateText("out");
  });

  function animateLeaves(direction) {
    const leaves = document.querySelectorAll(".leaf");
    leaves.forEach((leaf, index) => {
      if (direction === "in") {
        leaf.style.transform = `translate(${index % 2 === 0 ? "-" : ""}20px, ${
          index < 2 ? "-" : ""
        }20px) rotate(${index % 2 === 0 ? "-" : ""}15deg)`;
      } else {
        leaf.style.transform = "translate(0, 0) rotate(0)";
      }
    });
  }

  function animateText(direction) {
    const text = document.querySelector(".text");
    if (direction === "in") {
      text.style.opacity = "1";
    } else {
      text.style.opacity = "0";
    }
  }
});

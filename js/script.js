document.addEventListener("DOMContentLoaded", function () {
  // Banner Height Measurement
  const bannerHeightCalc = document.querySelector("#banner-height-calc");
  const bannerLastDiv = document.querySelector("#banner-last-div");
  bannerHeightCalc.style.height = `calc(98% - ${bannerLastDiv.offsetHeight}px)`;

  // Navigation Menu Toggle
  const menuBtns = document.querySelectorAll(".menu-btn");
  let isMenuOpen = false;

  menuBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      isMenuOpen = !isMenuOpen;
    });
  });
});

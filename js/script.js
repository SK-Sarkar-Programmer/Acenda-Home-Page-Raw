document.addEventListener("DOMContentLoaded", function () {
  // Navigation Menu Toggle
  const menuBtns = document.querySelectorAll(".menu-btn");
  let isMenuOpen = false;

  menuBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      isMenuOpen = !isMenuOpen;
    });
  });

  // Banner Height Measurement
  const bannerHeightCalc = document.querySelector("#banner-height-calc");
  const bannerLastDiv = document.querySelector("#banner-last-div");
  bannerHeightCalc.style.height = `calc(98% - ${bannerLastDiv.offsetHeight}px)`;

  // Partners Logo Marquee
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const partnersMarquee = document.querySelector("#partners-marquee");
    partnersMarquee.setAttribute("marquee-animation", true);

    const logoSlides = document.querySelector("#logo-slides");
    const logoSlidesCopies = Array.from(logoSlides.children);

    logoSlidesCopies.forEach((child) => {
      const logoCopied = child.cloneNode(true);
      logoCopied.setAttribute("aria-hidden", true);

      logoSlides.appendChild(logoCopied);
    });
  }
});

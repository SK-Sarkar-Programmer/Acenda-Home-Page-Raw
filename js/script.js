document.addEventListener("DOMContentLoaded", function () {
  // Navigation Menu Toggle
  const menuBtns = document.querySelectorAll(".menu-btn");
  const navSection = document.querySelector(".navigation-small-device");
  let isMenuOpen = false;

  menuBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      isMenuOpen = !isMenuOpen;

      if (isMenuOpen) {
        navSection.style.display = "block";
        navSection.style.opacity = "1";
      } else {
        navSection.style.display = "none";
        navSection.style.opacity = "0";
      }
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

    partnersMarquee.addEventListener("mouseenter", function () {
      logoSlides.style.animationPlayState = "paused";
    });

    partnersMarquee.addEventListener("mouseleave", function () {
      logoSlides.style.animationPlayState = "running";
    });
  }

  // Top Booking Slider
  function navigation(slider) {
    let wrapper, dots;

    function markup(remove) {
      wrapperMarkup(remove);
      dotMarkup(remove);
    }

    function removeElement(elment) {
      elment.parentNode.removeChild(elment);
    }
    function createDiv(className) {
      var div = document.createElement("div");
      var classNames = className.split(" ");
      classNames.forEach((name) => div.classList.add(name));
      return div;
    }

    function wrapperMarkup(remove) {
      if (remove) {
        var parent = wrapper.parentNode;
        while (wrapper.firstChild)
          parent.insertBefore(wrapper.firstChild, wrapper);
        removeElement(wrapper);
        return;
      }
      wrapper = createDiv("navigation-wrapper");
      slider.container.parentNode.appendChild(wrapper);
      wrapper.appendChild(slider.container);
    }

    function dotMarkup(remove) {
      if (remove) {
        removeElement(dots);
        return;
      }
      dots = createDiv("dots");
      slider.track.details.slides.forEach((_e, idx) => {
        var dot = createDiv("dot");
        dot.addEventListener("click", () => slider.moveToIdx(idx));
        dots.appendChild(dot);
      });
      wrapper.appendChild(dots);
    }

    function updateClasses() {
      var slide = slider.track.details.rel;
      Array.from(dots.children).forEach(function (dot, idx) {
        idx === slide
          ? dot.classList.add("dot--active")
          : dot.classList.remove("dot--active");
      });
    }

    slider.on("created", () => {
      markup();
      updateClasses();
    });
    slider.on("optionsChanged", () => {
      console.log(2);
      markup(true);
      markup();
      updateClasses();
    });
    slider.on("slideChanged", () => {
      updateClasses();
    });
    slider.on("destroyed", () => {
      markup(true);
    });
  }

  const topBookingSliders = document.querySelectorAll(".top-booking-slider");
  topBookingSliders.forEach(
    (slider) => new KeenSlider(slider, { loop: true }, [navigation])
  );
});

import $ from "jquery";
window.jQuery = $;
window.$ = $;
import Swiper from "swiper/bundle";
import { gsap } from "../../node_modules/gsap/dist/gsap";
import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger";

import LocomotiveScroll from "../../node_modules/locomotive-scroll/dist/locomotive-scroll";

require("./libs/jquery.event.move");
require("./libs/jquery.twentytwenty");
require("/js/openseadragon/openseadragon");
require("../../node_modules/magnific-popup/dist/jquery.magnific-popup");
require("./slickQuiz");
require("./master");
require("../js/libs/three.min");
require("../js/libs/panolens.min");

const menuButton = document.querySelector(".main-nav__button");
const menuList = document.querySelector(".main-nav__list");
const body = document.querySelector("body");
const lang = document.querySelector(".lang");
const playBtn = document.querySelector(".volume__button");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    let expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !expanded);
    menuButton.classList.toggle("main-nav__button--open");
    menuList.classList.toggle("main-nav__list--open");
    body.classList.toggle("page__body--fade");
    lang.classList.toggle("lang--active");
    playBtn.classList.toggle("volume__button--active");
  });

  document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      menuButton.classList.remove("main-nav__button--open");
      menuList.classList.remove("main-nav__list--open");
      body.classList.remove("page__body--fade");
      lang.classList.remove("lang--active");
    }
  };
}

if (playBtn) {
  setTimeout(() => {
    playBtn.addEventListener("click", (e) => {
      if (playBtn.classList.contains("volume__button--play")) {
        document.querySelector("audio").pause();
        playBtn.classList.remove("volume__button--play"); // changing icon for button
      } else {
        document.querySelector("audio").play();
        playBtn.classList.add("volume__button--play");
      }
      //playBtn.classList.toggle("volume__button--play");
    });
  }, 500);
}

if (document.querySelector("audio")) {
  document.querySelector("audio").addEventListener("ended", (e) => {
    playBtn.classList.remove("volume__button--play");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  require("/js/modules/tab-section");
  // Слайдер на главной
  const mainSlider = new Swiper(".promo-slider .swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    mousewheelControl: true,
    initialSlide: 2,
    coverflowEffect: {
      //rotate: 5,
      rotate: 5,
      stretch: 20,
      depth: 100,
      modifier: 3,
      slideShadows: false,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    mousewheel: {
      sensitivity: 1,
    },
    slideToClickedSlide: true,
  });

  let mapTabs = document.querySelectorAll(".map [role=tab]");

  if (mapTabs) {
    mapTabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        //Слайдр для карт
        const swiperMap = new Swiper(".map__slider", {
          effect: "fade",
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      });
    });
  }

  const swiperGallery = new Swiper(".swiper-gallery", {
    effect: "coverflow",
    spaceBetween: 10,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    mousewheelControl: false,
    initialSlide: 0,
    coverflowEffect: {
      //rotate: 5,
      rotate: 5,
      stretch: 20,
      depth: 100,
      modifier: 3,
      slideShadows: false,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    slideToClickedSlide: true,
    // thumbs: {
    //   swiper: swiperThumbs,
    // },
  });

  //Слайдр с фейдом на лендиге
  const sectionFadeSlider = new Swiper(".swiper-fade-slider", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      waitForTransition: false,
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 2500,
    loop: true,
    simulateTouch: false,
  });

  //Слайдер карусель на лендинге
  const sectionSlider = new Swiper(".section .swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    mousewheelControl: true,
    initialSlide: 1,
    coverflowEffect: {
      //rotate: 5,
      rotate: 5,
      stretch: 20,
      depth: 100,
      modifier: 3,
      slideShadows: false,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    mousewheel: {
      sensitivity: 1,
    },
    slideToClickedSlide: true,
  });

  const swiper = new Swiper(".textpage__slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const tooltips = Array.from(document.querySelectorAll(".tooltip"));
  const tooltipContainer = document.querySelector(".tooltip-content");

  let tooltipID;
  tooltips.forEach((tooltip) => {
    if (tooltip) {
      tooltip.addEventListener("mouseenter", (e) => {
        console.log("check");
        tooltipID = e.target.getAttribute("data-id");
        tooltipContainer.classList.add("tooltip-content--fade-in");
        tooltipContainer.style.left = `${e.pageX}px`;
        tooltipContainer.style.top = `${e.pageY}px`;
        tooltipContainer.innerHTML = tooltipData[tooltipID - 1].txt;
      });

      tooltip.addEventListener("mouseout", (e) => {
        tooltipContainer.classList.remove("tooltip-content--fade-in");
      });
    }
  });

  if (tooltipContainer) {
    tooltipContainer.addEventListener("mouseenter", () => {
      tooltipContainer.classList.add("tooltip-content--fade-in");
    });
    tooltipContainer.addEventListener("mouseout", () => {
      tooltipContainer.classList.remove("tooltip-content--fade-in");
    });
  }

  let dropdown = document.querySelectorAll(".main-nav__item--with-dropdown");

  dropdown.forEach((element) =>
    element.addEventListener("click", (event) => {
      // event.preventDefault();
      // event.stopPropagation();

      document
        .querySelectorAll(".main-nav__item--with-dropdown")
        .forEach((element) => {
          element.classList.remove("main-nav__item--open");
        });
      element.classList.add("main-nav__item--open");

      let innerLists = element.querySelector("ul");
      if (innerLists) {
        if (!innerLists.classList.contains("main-nav__sublist--open")) {
          document
            .querySelector("ul")
            .querySelectorAll("ul")
            .forEach((elm) => {
              if (!isDescendant(elm, element)) {
                elm.classList.remove("main-nav__sublist--open");
              }
            });
        }

        innerLists.classList.toggle("main-nav__sublist--open");
      }
    })
  );

  function isDescendant(parent, child) {
    let node = child.parentNode;
    while (node != null) {
      if (node === parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }

  if (document.querySelector("[data-scroll-container]")) {
    const scroller = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    gsap.registerPlugin(ScrollTrigger);

    scroller.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".container", {
      scrollTop(value) {
        return arguments.length
          ? scroller.scrollTo(value, 0, 0)
          : scroller.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.create({
      trigger: ".section__image-mask",
      scroller: ".container",
      start: "top+=30% 50%",
      end: "bottom-=40% 50%",
      animation: gsap.to(".section__image-mask", { backgroundSize: "120%" }),
      scrub: 5,
      // markers: true
    });

    ScrollTrigger.addEventListener("refresh", () => scroller.update());

    ScrollTrigger.refresh();

    window.addEventListener("resize", function () {
      if (window.innerWidth < 1023) {
        console.log("eppp");
        scroller.destroy();
      }
    });
  }

  $(".textpage__img-popup").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    tCounter: '<span class="mfp-counter">%curr% / %total%</span>', // markup of counter
    image: {
      verticalFit: true,
      titleSrc: function (item) {
        return item.el.attr("data-caption");
      },
    },
    zoom: {
      enabled: true,
    },
  });

  $(".textpage__iframe-popup").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-with-zoom mfp-img-mobile",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  $(".popup-inline").magnificPopup({
    type: "inline",
    preloader: false,
    mainClass: "mfp-img-mobile  mfp-fade",
    // closeBtnInside: false,
    // fixedContentPos: true,
    // gallery: {
    // 	enabled: true
    // },

    callbacks: {
      open: function () {
        $(".before-after").twentytwenty({
          before_label: "До реставрации",
          after_label: "После реставрации",
        });

        $(".before-after-eng").twentytwenty({
          before_label: "Before restoration",
          after_label: "Digital reconstruction",
        });
      },
    },
  });

  // var $items = $('path');
  var $items = $(".map__img");
  var $description = $(".description__item");

  $(".btn-group").on("click", ".filter", function () {
    // var value = $(this).data('filter');
    // $items.removeClass();
    // $items.not($selected).removeClass(value);

    // var $selected = $items.filter(function () {
    //   return $(this).data('filter').indexOf(value) != -1;
    // }).addClass(value);

    var value = $(this).data("filter");
    $items.removeClass("active");
    $items.not($selected).removeClass("active");

    var $selected = $items
      .filter(function () {
        return $(this).data("filter").indexOf(value) != -1;
      })
      .addClass("active");
    $(this).addClass("active").siblings().removeClass("active");

    $description.removeClass("active");
    var $selectedDescr = $description
      .filter(function () {
        return $(this).data("filter").indexOf(value) != -1;
      })
      .fadeIn();
    $description.not($selectedDescr).fadeOut(10);
  });

  const slides = document.querySelectorAll(".cards-section__item");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
});

$(function () {
  $("#slickQuiz").slickQuiz({});
});

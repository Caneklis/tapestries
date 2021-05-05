import $ from "jquery";
window.jQuery = $;
window.$ = $;
import Swiper from "swiper/bundle";
import { gsap } from "../../node_modules/gsap/dist/gsap";
import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger";

import LocomotiveScroll from "../../node_modules/locomotive-scroll/dist/locomotive-scroll";

const menuButton = document.querySelector(".main-nav__button");
const menuList = document.querySelector(".main-nav__list");
const body = document.querySelector("body");
const lang = document.querySelector(".lang");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    let expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !expanded);
    menuButton.classList.toggle("main-nav__button--open");
    menuList.classList.toggle("main-nav__list--open");
    body.classList.toggle("page__body--fade");
    lang.classList.toggle("lang--active");
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

document.addEventListener("DOMContentLoaded", () => {
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
});

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
}

import OpenSeadragon from "../js/openseadragon/openseadragon";

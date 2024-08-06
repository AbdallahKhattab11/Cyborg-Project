"use strict";

// Global variables
const LOADING_PAGE_TIME_MS = 500;
let currentPage = window.location.pathname;

// Shared variables
const loadingPageEle = document.querySelector(".animation");
const navBarContainer = document.querySelector("nav .container .links");
const navBarLinks = document.querySelectorAll("nav .container .links ul li a");
const barsIcon = document.getElementById("bars-icon");

//* ------------------------------------------

// Home variables
const bannerBtn = document.querySelector(".banner .banner-btn");
const gamingLibraryBtns = document.querySelectorAll(
  "section .gaming-library .items .item ul li:last-child a"
);
const discoverPopularBtn = document.querySelector(".mostPopular .btn a");
const viewYourLibraryBtn = document.querySelector(".gaming-library .btn a");

//* ------------------------------------------

// browse variables
const viewAllGamesLink = document.querySelector(
  ".top-downloaded .top-downloaded-link"
);
const goToProfileBtn = document.querySelector(
  ".how-to-start-live .btn-goToProfile a"
);
const discoverAllStreamsBtn = document.querySelector(
  ".most-popular-live-stream .discover-all-streams-btn a"
);

//* ------------------------------------------

// Details variables

//* ------------------------------------------

// Streams variables
const loadMoreStreamsBtn = document.querySelector(
  ".most-popular-live-stream .load-more-streamsBtn a"
);

//* ------------------------------------------

// Profile variables
const loadMoreClipsBtn = document.querySelector(
  ".most-popular-clips .load-more-clips p"
);

//! ----------Start of Shared functions--------------------------------------------------------

//* --------------loading animation------------------------

function loadingPageAnimation() {
  loadingPageEle.style.cssText = "display: flex;";

  setTimeout(() => {
    loadingPageEle.style.cssText = "display: none;";
  }, LOADING_PAGE_TIME_MS);
}

loadingPageAnimation();

//* ------------------------------------------

// add clicked link to session storage
navBarLinks.forEach((link) => {
  link.addEventListener("click", function () {
    sessionStorage.setItem("activeLink", this.href);
  });
});

// set active class to active link based on session storage
function getActiveLink() {
  const activeLink = sessionStorage.getItem("activeLink");

  if (!activeLink) return;

  navBarLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.href === activeLink) link.classList.add("active");
  });
}
document.addEventListener("DOMContentLoaded", getActiveLink);

//* ------------------------------------------

// * add active class to links div
function toggleNavMenu() {
  const hasActiveClass = navBarContainer.classList.contains("active");
  const iconClass = hasActiveClass ? "bars" : "xmark";

  navBarContainer.classList.toggle("active");
  barsIcon.className = `fa-solid fa-${iconClass}`;
}

barsIcon.addEventListener("click", toggleNavMenu);

//! ----------End of Shared functions--------------------------------------------------------

// Load pages scripts
const isHomePage = currentPage.includes("index.html");
const isBrowsePage = currentPage.includes("browse.html");
const isStreamsPage = currentPage.includes("streams.html");

if (isHomePage) homePageScripts();
if (isBrowsePage) browsePageScripts();
if (isStreamsPage) streamsPageScripts();

// Pages scripts
function homePageScripts() {
  //* ----------handle banner Btn----------------------------
  bannerBtn.addEventListener("click", function () {
    sessionStorage.setItem("activeLink", this.href);
  });
  document.addEventListener("DOMContentLoaded", function () {
    getActiveLink();
  });

  //* ----------handle discover btn----------------------------
  discoverPopularBtn.addEventListener("click", function () {
    sessionStorage.setItem("activeLink", this.href);
  });
  document.addEventListener("DOMContentLoaded", function () {
    getActiveLink();
  });

  // add active to download btn in gaming library
  gamingLibraryBtns.forEach((element) => {
    element.onclick = function (el) {
      el.preventDefault();
      this.classList.toggle("active");
      gamingLibraryBtns.forEach((e) => {
        if (e.classList.contains("active")) {
          e.textContent = "downloaded";
        } else {
          e.textContent = "download";
        }
      });
    };
  });

  //* ----------handle view your library btn----------------------------
  viewYourLibraryBtn.addEventListener("click", function () {
    sessionStorage.setItem("activeLink", this.href);
  });
  document.addEventListener("DOMContentLoaded", function () {
    getActiveLink();
  });
}

function browsePageScripts() {
  //* ----------handle swiper.js----------------------------
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,

    grabCursor: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  //* ----------handle view all games Btn----------------------------
  viewAllGamesLink.addEventListener("click", function () {
    sessionStorage.setItem("activeLink", this.href);
  });
  document.addEventListener("DOMContentLoaded", getActiveLink());

  //* ----------handle go to profile Btn----------------------------
  goToProfileBtn.addEventListener("click", function () {
    sessionStorage.setItem("activeLink", this.href);
  });
  document.addEventListener("DOMContentLoaded", getActiveLink());

  //* ----------handle discover all streams Btn----------------------------
  discoverAllStreamsBtn.addEventListener("click", function () {
    sessionStorage.setItem("activeLink", this.href);
  });
  document.addEventListener("DOMContentLoaded", getActiveLink());
}

function streamsPageScripts() {
  //* ----------handle swiper.js----------------------------
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,

    grabCursor: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  //* ----------handle load more streams Btn----------------------------
  loadMoreStreamsBtn.addEventListener("click", function () {
    sessionStorage.setItem("activeLink", this.href);
  });

  getActiveLink();
}

'use strict'


// browse variables
let viewAllGamesLink = document.querySelector(".top-downloaded .top-downloaded-link"); 
let goToProfileBtn = document.querySelector(".how-to-start-live .btn-goToProfile a");
let discoverAllStreamsBtn = document.querySelector(".most-popular-live-stream .discover-all-streams-btn a");


document.addEventListener("DOMContentLoaded", function () {
  if (currentPage.includes("/browse.html")) {

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

//*---------------

  viewAllGamesLink.addEventListener("click", function () {
    sessionStorage.setItem("activeLink", this.href);
  });
  document.addEventListener("DOMContentLoaded", getActiveLink());

//*---------------

  goToProfileBtn.addEventListener("click", function () {
    sessionStorage.setItem("activeLink", this.href);
  });
  document.addEventListener("DOMContentLoaded", getActiveLink());

//*---------------

  discoverAllStreamsBtn.addEventListener("click", function () {
    sessionStorage.setItem("activeLink", this.href);
  });
  document.addEventListener("DOMContentLoaded", getActiveLink());
  }
})

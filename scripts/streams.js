'use strict'


document.addEventListener("DOMContentLoaded", function () {
  if (currentPage.includes("/streams.html")) {

    
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
    
  }
})
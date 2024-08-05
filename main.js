'use strict'


// Shared Content

// Shared variables
let animation = document.querySelector(".animation");
let a = document.querySelectorAll("nav .container .links ul li a"); // navbar links
let barsIcon = document.getElementById("bars-icon");
let linksDiv = document.querySelector("nav .container .links");

//* ------------------------------------------

// Home variables
let bannerBtn = document.querySelector(".banner .banner-btn");
let gamingLibraryBtns = document.querySelectorAll("section .gaming-library .items .item ul li:last-child a");
let discoverPopularBtn = document.querySelector(".mostPopular .btn a");
let viewYourLibraryBtn = document.querySelector(".gaming-library .btn a");

//* ------------------------------------------

// browse variables
let viewAllGamesLink = document.querySelector(".top-downloaded .top-downloaded-link"); 
let goToProfileBtn = document.querySelector(".how-to-start-live .btn-goToProfile a");
let discoverAllStreamsBtn = document.querySelector(".most-popular-live-stream .discover-all-streams-btn a");

//* ------------------------------------------

// Details variables

//* ------------------------------------------

// Streams variables
let loadMoreStreamsBtn = document.querySelector(".most-popular-live-stream .load-more-streamsBtn a");

//* ------------------------------------------

// Profile variables
let loadMoreClipsBtn = document.querySelector(".most-popular-clips .load-more-clips p");



//! ----------Start of Shared functions--------------------------------------------------------

//* --------------loading animation------------------------

document.addEventListener("DOMContentLoaded", function () {
  animation.style.cssText = " display: flex;";
});
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    animation.style.cssText = " display: none;";
  }, 500);
});



//* ------------------------------------------

// add clicked link to session storage
a.forEach((link) => {
  link.addEventListener("click", function () {
    sessionStorage.setItem("activeLink", this.href);
  });
});


// set active class to active link based on session storage
function getActiveLink() {
  const activeLink = sessionStorage.getItem("activeLink");
  if (activeLink) {
    a.forEach((link) => {
      link.classList.remove("active");
      if (link.href === activeLink) {
        link.classList.add("active");
      }
    });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  getActiveLink();
});

//* ------------------------------------------

  // * add active class to links div
  barsIcon.addEventListener("click", function () {
    linksDiv.classList.toggle("active");
    // change icon
    if (linksDiv.classList.contains("active")) {
      barsIcon.className = "fa-solid fa-xmark";
    } else {
      barsIcon.className = "fa-solid fa-bars";
    }
  });


//! ----------End of Shared functions--------------------------------------------------------

// get the current page.
let currentPage = window.location.pathname;

document.addEventListener("DOMContentLoaded", function () {
  console.log(currentPage);
  
  if (currentPage === "/index.html") {

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





  }else if (currentPage === "/browse.html") {

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

  }else if (currentPage === "/details.html") {

  }else if (currentPage === "/streams.html") {

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
    document.addEventListener("DOMContentLoaded", getActiveLink());
  }else {
    // Profile page

    //* ----------handle load more clips Btn----------------------------
    loadMoreClipsBtn.addEventListener("click", function () {
      
    })
  }


})
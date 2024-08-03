"use strick";

//Home Page variables
let a = document.querySelectorAll("nav .container .links ul li a"); // navbar links
let barsIcon = document.getElementById("bars-icon");
let linksDiv = document.querySelector("nav .container .links");
let gamingLibraryBtns = document.querySelectorAll(
  "section .gaming-library .items .item ul li:last-child a"
);
let bannerBtn = document.querySelector(".banner .banner-btn");
let discoverPopularBtn = document.querySelector(".mostPopular .btn a");
let gamingLibraryBtn = document.querySelector(".gaming-library .btn a");
//* --------------------------------------

//Browse page variables
let swiper_slides = document.querySelectorAll(
  ".featured-games .swiper .swiper-slide"
);
let viewAllGamesLink = document.querySelector(
  ".top-downloaded .top-downloaded-link"
); // null in another page
let goToProfileBtn = document.querySelector(
  ".how-to-start-live .btn-goToProfile a"
);
let discoverAllStreamsBtn = document.querySelector(
  ".most-popular-live-stream .discover-all-streams-btn a"
);

//* --------------------------------------

// streams page variables
let streams_swiper_slides = document.querySelectorAll(
  ".live-streams .swiper .swiper-slide"
);

// ? General


//* --------------------------------------
// animation
let animation = document.querySelector(".animation");

document.addEventListener("DOMContentLoaded", function () {
  animation.style.cssText = " display: flex;";

});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    animation.style.cssText = " display: none;";

  }, 500);
});






// add clicked link to session storage
a.forEach((link) => {
  link.addEventListener("click", function () {
    sessionStorage.setItem("activeLink", this.href);
  });
});

// set the active link based on session storage
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


//* --------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  let currentPage = window.location.pathname;
  if (currentPage === "/index.html") {
    //! index.html

    // todo Home page

    //* --------------------------------------

    bannerBtn.addEventListener("click", function () {
      sessionStorage.setItem("activeLink", this.href);
    });
    document.addEventListener("DOMContentLoaded", function () {
      getActiveLink();
    });

    //* --------------------------------------

    // handle discover popular btn in most popular section
    discoverPopularBtn.addEventListener("click", function () {
      sessionStorage.setItem("activeLink", this.href);
    });
    document.addEventListener("DOMContentLoaded", function () {
      getActiveLink();
    });

    //* --------------------------------------
    // handle gamingLibraryBtn in your gaming library section
    gamingLibraryBtn.addEventListener("click", function () {
      sessionStorage.setItem("activeLink", this.href);
    });
    document.addEventListener("DOMContentLoaded", function () {
      getActiveLink();
    });

    //* --------------------------------------

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

    //* --------------------------------------

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
  } else if (currentPage === "/browse.html") {
    //! browse.html

    // todo Browse page
    // featured games section  using swiper.js for slides
    const swiper2 = new Swiper(".mySwiper", {
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
    //* --------------------------------------

    // hover on swiper-slide
    swiper_slides.forEach((slide) => {
      slide.addEventListener("mouseover", function () {
        this.children[0].children[0].style.cssText = " top: -80px; opacity: 1;";
      });
    });
    swiper_slides.forEach((slide) => {
      slide.addEventListener("mouseout", function () {
        this.children[0].children[0].style.cssText = " top: 0; opacity: 0;";
      });
    });

    //* --------------------------------------

    // handle view all games link in top downloaded section
    viewAllGamesLink.addEventListener("click", function () {
      sessionStorage.setItem("activeLink", this.href);
    });
    document.addEventListener("DOMContentLoaded", getActiveLink());

    //* -------------------------------------

    // handle go to profile btn in how to start your live stream section
    goToProfileBtn.addEventListener("click", function () {
      sessionStorage.setItem("activeLink", this.href);
    });
    document.addEventListener("DOMContentLoaded", getActiveLink());

    //* -------------------------------------

    // handle discover all streams btn in most popular live stream section
    discoverAllStreamsBtn.addEventListener("click", function () {
      sessionStorage.setItem("activeLink", this.href);
    });



    document.addEventListener("DOMContentLoaded", getActiveLink());
  } else if (currentPage === "/details.html") {
    //! details.html
  } else if (currentPage === "/streams.html") {
    //! streams.html
    // live streams  section  using swiper.js for slides
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
    //* --------------------------------------
    // hover on swiper-slide
    streams_swiper_slides.forEach((slide) => {
      slide.addEventListener("mouseover", function () {
        this.children[0].children[0].style.cssText = " top: -80px; opacity: 1;";
      });
    });
    streams_swiper_slides.forEach((slide) => {
      slide.addEventListener("mouseout", function () {
        this.children[0].children[0].style.cssText = " top: 0; opacity: 0;";
      });
    });

    //* --------------------------------------
  } else {
  }
});

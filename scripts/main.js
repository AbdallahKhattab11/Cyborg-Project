'use strict'


// Shared Content

// Shared variables
let animation = document.querySelector(".animation");
let a = document.querySelectorAll("nav .container .links ul li a"); // navbar links
let barsIcon = document.getElementById("bars-icon");
let linksDiv = document.querySelector("nav .container .links");

const LOADING_PAGE_TIME_MS = 500;
//* ------------------------------------------

// Home variables
let bannerBtn = document.querySelector(".banner .banner-btn");
let gamingLibraryBtns = document.querySelectorAll("section .gaming-library .items .item ul li:last-child a");
let discoverPopularBtn = document.querySelector(".mostPopular .btn a");
let viewYourLibraryBtn = document.querySelector(".gaming-library .btn a");

//! ----------Start of Shared functions--------------------------------------------------------


//* --------------loading animation------------------------

document.addEventListener("DOMContentLoaded", function () {
  animation.style.cssText = " display: flex;";
});
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    animation.style.cssText = " display: none;";
  }, LOADING_PAGE_TIME_MS);
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


const currentPage = window.location.pathname;

document.addEventListener("DOMContentLoaded", function () {
  console.log(currentPage);
  
  if (currentPage.includes("/index.html") || currentPage === "/Cyborg-Project/") {

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

})
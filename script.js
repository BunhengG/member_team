let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
let scrollTopBtn = document.getElementById("scroll-top");

/* SideMenu Toggle */
hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

let header = document.querySelector("header");
window.onscroll = () => {
  /* Sticky Header */
  let pos = document.documentElement.scrollTop;
  if (pos > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  /* Scroll Top Button */
  if (pos > 300) {
    scrollTopBtn.style.display = "grid";
  } else {
    scrollTopBtn.style.display = "none";
  }

  scrollTopBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};

// script.js
const showPopupButton = document.getElementById("showPopup");
const closePopupButton = document.getElementById("closePopup");
const popup = document.getElementById("popup");

showPopupButton.addEventListener("click", () => {
    popup.style.display = "flex";
});

closePopupButton.addEventListener("click", () => {
    popup.style.display = "none";
});


const showPopupButton1 = document.getElementById("showPopup1");
const closePopupButton1 = document.getElementById("closePopup1");
const popup1 = document.getElementById("popup1");

showPopupButton1.addEventListener("click", () => {
    popup1.style.display = "flex";
});

closePopupButton1.addEventListener("click", () => {
    popup1.style.display = "none";
});

const showPopupButton2 = document.getElementById("showPopup2");
const closePopupButton2 = document.getElementById("closePopup2");
const popup2 = document.getElementById("popup2");

showPopupButton2.addEventListener("click", () => {
    popup2.style.display = "flex";
});

closePopupButton2.addEventListener("click", () => {
    popup2.style.display = "none";
});


const accordionButtons = document.querySelectorAll(".accordion-item-button");

accordionButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const clickedBtn = e.target;
    console.log(clickedBtn);
    clickedBtn.nextElementSibling.classList.toggle("active");
    clickedBtn.classList.toggle("open");
  });
});

// ======Nav=======
const navbar = document.querySelector(".nav-bar");
const navbar_open = document.querySelector(".nav-bar-open");
const navbar_button = document.querySelector(".nav-bar-button");
const navbar_button_open = document.querySelector(
  ".nav-bar-open-header-button"
);

const navbar_list = document.querySelector(".nav-bar-list");
const navbar_cart = document.querySelector(".nav-bar-cart");
const container = document.querySelector(".container");

navbar_button.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.toggle("closed");
  navbar.classList.toggle("closed");
  navbar_open.classList.toggle("open");
  // disable scroll on page
  document.body.style.overflow = "hidden";
});

navbar_button_open.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.toggle("closed");
  navbar.classList.toggle("closed");
  navbar_open.classList.toggle("open");
  // enable scroll on page
  document.body.style.overflow = "scroll";
});

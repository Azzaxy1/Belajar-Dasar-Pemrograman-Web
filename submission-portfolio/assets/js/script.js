// Hamburger Menu
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

// Slider Skill Icons
let index = 0;
const slides = document.querySelectorAll(".slider img");
const totalSlides = slides.length;
const slider = document.querySelector(".slider");
const slideWidth = slides[0].clientWidth + -50;

function showSlide() {
  index = (index + 1) % totalSlides;
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
  setTimeout(showSlide, 2000);
}

showSlide();

// Footer
const footer = document.querySelector("footer p");
const currentDate = new Date().getFullYear();
footer.innerHTML = `<p>&#169; ${currentDate}, Made with 🔥🌾 by Abdurrohman Azis</p>`;

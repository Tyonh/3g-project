// --- Carrossel ---
const slides = document.querySelectorAll(".highlight-section .slide");
let currentSlide = 0;
let interval = null;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  let prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}

document.getElementById("nextSlide").addEventListener("click", () => {
  nextSlide();
  resetInterval();
});
document.getElementById("prevSlide").addEventListener("click", () => {
  prevSlide();
  resetInterval();
});

function startInterval() {
  interval = setInterval(nextSlide, 5000); // Troca a cada 5 segundos
}
function resetInterval() {
  clearInterval(interval);
  startInterval();
}
// Inicialização
showSlide(0);
startInterval();

// --- Menu responsivo ---
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded fired");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      console.log("Menu toggle clicked");
      navLinks.classList.toggle("open");
      console.log("navLinks classes:", navLinks.classList);
      menuToggle.setAttribute(
        "aria-expanded",
        navLinks.classList.contains("open")
      );
    });
    // Fecha o menu ao clicar em um link (mobile UX)
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 900) {
          navLinks.classList.remove("open");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  } else {
    console.log("menuToggle or navLinks not found");
  }
});

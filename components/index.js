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

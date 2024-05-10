const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));

document.addEventListener("DOMContentLoaded", function () {
  const doces = document.querySelector(".doces");
  const doceWidth = document.querySelector(".doce").offsetWidth;
  let currentIndex = 0;

  document.querySelector(".prevBtn").addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + doces.children.length) % doces.children.length;
    updateCarousel();
  });

  document.querySelector(".nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % doces.children.length;
    updateCarousel();
  });

  // Função para atualizar a posição do carrossel
  function updateCarousel() {
    const newPosition = -currentIndex * doceWidth;
    doces.style.transition = "transform 0.5s ease-in-out";
    doces.style.transform = `translateX(${newPosition}px)`;
  }
});

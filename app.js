const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
const menuItems = document.querySelectorAll(".nav-list li a");

// Função para fechar o menu hamburguer
function fecharMenu() {
  nav.classList.remove("active");
}

hamburguer.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Adiciona um evento de clique a cada item do menu
menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // Fecha o menu hamburguer quando um item do menu é clicado
    fecharMenu();
  });
});

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

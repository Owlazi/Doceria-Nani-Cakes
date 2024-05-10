const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));

document.addEventListener("DOMContentLoaded", function () {
  const doces = document.querySelector(".doces");
  const doceWidth = document.querySelector(".doce").offsetWidth;
  let currentIndex = 0;
  const intervalTime = 3000; // Intervalo de tempo em milissegundos

  // Remover os botões de navegação
  document.querySelector(".prevBtn").remove();
  document.querySelector(".nextBtn").remove();

  // Função para avançar automaticamente os slides
  function autoAdvance() {
    currentIndex = (currentIndex + 1) % doces.children.length;
    updateCarousel();
  }

  // Iniciar o intervalo para avançar automaticamente os slides
  const intervalId = setInterval(autoAdvance, intervalTime);

  // Função para atualizar a posição do carrossel
  function updateCarousel() {
    const newPosition = -currentIndex * doceWidth;
    doces.style.transition = "transform 0.5s ease-in-out";
    doces.style.transform = `translateX(${newPosition}px)`;

    // Verificar se chegamos ao último slide
    if (currentIndex === doces.children.length - 0) {
      // Adicionar ouvinte de evento para detectar quando a transição terminar
      doces.addEventListener("transitionend", function transitionEndHandler() {
        // Reiniciar o carrossel imediatamente após a transição terminar
        currentIndex = 0; // Voltar para o primeiro slide
        doces.style.transition = ""; // Remover transição para evitar animação brusca
        doces.style.transform = `translateX(0)`;

        // Remover o ouvinte de evento para evitar múltiplas execuções
        doces.removeEventListener("transitionend", transitionEndHandler);
      });
    }
  }
});

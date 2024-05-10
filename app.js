const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));

document.addEventListener("DOMContentLoaded", function () {
  const doces = document.querySelector(".doces");
  const doceWidth = document.querySelector(".doce").offsetWidth;
  let currentIndex = 0;
  const intervalTime = 9000; // Intervalo de tempo em milissegundos

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
        // doces.style.transition = 'none'; // Remover transição para evitar animação brusca
        doces.style.transform = `translateX(0)`;

        // Remover o ouvinte de evento para evitar múltiplas execuções
        doces.removeEventListener("transitionend", transitionEndHandler);
      });
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Código para controlar o carrossel existente
  // Código para adicionar a navegação por gestos (swipe)
});

document.addEventListener("DOMContentLoaded", function () {
  const doces = document.querySelector(".doces");
  let startX = 0;
  let isDragging = false;
  let currentPosition = 0;

  // Adicionar ouvintes de eventos para o toque inicial e o movimento do dedo
  doces.addEventListener("touchstart", touchStart);
  doces.addEventListener("touchmove", touchMove);

  function touchStart(event) {
    isDragging = true;
    startX = event.touches[0].clientX;
  }

  function touchMove(event) {
    if (!isDragging) return;
    const currentX = event.touches[0].clientX;
    const diffX = currentX - startX;
    doces.style.transition = "none"; // Remover transição para movimento suave
    doces.style.transform = `translateX(${currentPosition + diffX}px)`;
  }

  // Adicionar ouvinte de evento para o toque final
  doces.addEventListener("touchend", touchEnd);

  function touchEnd(event) {
    if (!isDragging) return;
    const currentX = event.changedTouches[0].clientX;
    const diffX = currentX - startX;
    // Definir uma distância mínima para considerar como um deslize
    if (Math.abs(diffX) > 20) {
      // Atualizar a posição atual do carrossel com base no deslize
      currentPosition += diffX;
      doces.style.transition = "transform 0.3s ease-in-out"; // Adicionar transição de volta
      doces.style.transform = `translateX(${currentPosition}px)`;

      // Verificar se chegamos ao último slide e o usuário fez um deslize para a direita
      if (currentPosition >= 0 && diffX < 0) {
        // Reiniciar o carrossel para o último slide
        currentPosition = -doces.offsetWidth + window.innerWidth; // Último slide menos a largura da tela
        doces.style.transition = "transform 0.3s ease-in-out"; // Adicionar transição de volta
        doces.style.transform = `translateX(${currentPosition}px)`;
      }
    }
    isDragging = false;
  }
});

import './style.css';

// Script leve para inicialização da página fluida
document.addEventListener('DOMContentLoaded', () => {
  // Garante que todas as seções estejam marcadas como ativas/visíveis
  document.querySelectorAll('.slide').forEach((slide) => {
    slide.classList.add('in-view');
  });
});

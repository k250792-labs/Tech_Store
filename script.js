const cards = document.querySelectorAll('.card');

function revealCards() {
  const windowHeight = window.innerHeight;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const revealPoint = 150; 

    if(cardTop < windowHeight - revealPoint) {
      card.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);

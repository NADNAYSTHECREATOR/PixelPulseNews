function sendEmail(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;
  const subject = form.subject.value;

  const body = encodeURIComponent(
    `${message}`
  );

  const mailtoLink = `mailto:pixelpulsenewsletterr@gmail.com?subject=${subject}&body=${body}`;

  window.open(mailtoLink, '_blank');
}



// SPOTLIGHT CAROUSEL
const track = document.querySelector('.spotlight-carousel-track');
const items = document.querySelectorAll('.spotlight-item');
const carouselWindow = document.querySelector('.spotlight-carousel-window');

let currentIndex = 0;
let autoSlideInterval;

function updateCarousel() {
  const itemWidth = items[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

carouselWindow.addEventListener('mouseenter', stopAutoSlide);
carouselWindow.addEventListener('mouseleave', startAutoSlide);

window.addEventListener('resize', updateCarousel);

// Start auto-sliding and initial update
startAutoSlide();
updateCarousel();


// REASEARCH ITEMS FILTER
const buttonContainer = document.querySelector('#research-filter-buttons');
const researchCards = document.querySelectorAll('.research-card');

if (buttonContainer) {
  buttonContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('research-filter-btn')) {
    const filterId = event.target.id;

    const researchFilterBtn = buttonContainer.querySelectorAll('.research-filter-btn');
    researchFilterBtn.forEach((btn) => {
      btn.removeAttribute('data-selected');
    });

    event.target.setAttribute('data-selected', 'true');

    researchCards.forEach((card) => {

      if (filterId === 'all' || card.classList.contains(filterId)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
});
}
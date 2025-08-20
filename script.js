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

//! RESEARCH PAGE JS

const buttonContainer = document.querySelector('#research-filter-buttons');
const researchCards = document.querySelectorAll('.research-card');

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

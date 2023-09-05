const modalButtons = document.querySelectorAll('.show-modal');
const modalComponent = document.querySelector('.modal');
const closeButton = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openModal = () => {
  modalComponent.classList.remove('hidden');
  overlay.classList.remove('hidden');
  modalComponent.focus();
};

modalButtons.forEach(button => {
  button.addEventListener('click', openModal);
});

const closeModal = () => {
  modalComponent.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modalComponent.classList.contains('hidden')) {
    closeModal();
    console.log('key was pressed');
  }
});

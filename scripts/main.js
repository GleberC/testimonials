// document.querySelectorAll('.testimonial').forEach((card) => {
//     card.addEventListener('click', () => {
//       card.classList.toggle('expanded');
//     });
//   });


const modal = document.getElementById('modal');
const modalContent = modal.querySelector('.modal-content');

document.querySelectorAll('.testimonial').forEach((card) => {
  card.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modalContent.innerHTML = card.innerHTML;
  });
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

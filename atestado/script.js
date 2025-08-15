const modal = document.getElementById('modal');
const btnReceita = document.getElementById('btnReceita');
const btnAtestado = document.getElementById('btnAtestado');
const closeModal = document.getElementById('closeModal');

btnReceita.addEventListener('click', () => modal.style.display = 'flex');
btnAtestado.addEventListener('click', () => modal.style.display = 'flex');

closeModal.addEventListener('click', () => modal.style.display = 'none');

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

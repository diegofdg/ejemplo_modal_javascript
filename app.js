const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

document.addEventListener('click', e => {  
  if (e.target == document.querySelector('.modal-container.show')) {
    modal_container.classList.remove('show');
  }
});

document.addEventListener('keyup', e => {
  if (e.key == 'Escape' && document.querySelector('.modal-container.show')) {
    modal_container.classList.remove('show');
  }
});

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});
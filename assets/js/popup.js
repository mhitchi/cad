// document.getElementById('btn-modal').addEventListener('click', function() {
//   document.getElementById('overlay').classList.add('is-visible');
//   document.getElementById('modal').classList.add('is-visible');
// });

// document.getElementById('close-btn').addEventListener('click', function() {
//   document.getElementById('overlay').classList.remove('is-visible');
//   document.getElementById('modal').classList.remove('is-visible');
// });
// document.getElementById('overlay').addEventListener('click', function() {
//   document.getElementById('overlay').classList.remove('is-visible');
//   document.getElementById('modal').classList.remove('is-visible');
// });
let imgBtn = document.getElementById('vid');
let modal = document.getElementById('modal');

imgBtn.addEventListener('click', () => {
  modal.classList.add('is-visible');
  modal.style.display = "block";
})

// const showModal = () => {
//   modal.addClass = "is-visible";
// }
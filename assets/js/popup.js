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
let modal = document.getElementById('vidModal');

imgBtn.addEventListener('click', () => {
  modal.classList.add('is-visible');
  modal.style.display = "block";
})


while(modal.classList.contains("is-visible")){
  //not console logging
  console.log("visible")
  window.onclick = closeModal(event);
}


const closeModal = (event) => {
  if (event.target.id !== "vidModal") {
    //not console logging
    console.log("nope")
    modal.classList.remove('is-visible');
    modal.style.display = "none";
  }
}
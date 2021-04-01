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
let overlay = document.getElementById('overlay');

// imgBtn.addEventListener('click', () => {
//   modal.classList.add('is-visible');
//   modal.style.display = "block";
//   overlay.classList.add('is-visible');
//   // overlay.addEventListener('click', () => {
//   //   console.log("closing")
//   //   modal.classList.remove('is-visible');
//   //   modal.style.display = "none";
//   //   overlay.classList.remove('is-visible');
//   // })
// })

document.onclick = function(e) {
  if (e.target.id = "vid") {
    console.log(e.target.id);
    modal.classList.add('is-visible');
    modal.style.display = "block";
    // overlay.classList.add('is-visible');
  } else if (e.target.id = "vidModal") {
    console.log(e.target.id);
    modal.classList.add('is-visible');
    modal.style.display = "block";
    // overlay.classList.add('is-visible');
  } else {
    console.log(e.target.id)
    modal.classList.remove('is-visible');
    modal.style.display = "none";
    // overlay.classList.remove('is-visible');
  }
}

// window.onclick = closeModal(event);

// const closeModal = (event) => {
//   //not console logging
//   console.log('closing')
//   if (event.target.id !== "vidModal") {
//     //not console logging
//     console.log("nope")
//     modal.classList.remove('is-visible');
//     modal.style.display = "none";
//   }
// }
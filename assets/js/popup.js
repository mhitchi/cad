let imgBtn = document.getElementById('vid');
let modal = document.getElementById('vidModal');

imgBtn.addEventListener('click', () => {
  modal.classList.add('is-visible');
  modal.style.display = "block";
  document.onclick = function(e) {
    if (e.target.id == "vidModal" || e.target.id == "vid") {
      // console.log(e.target.id)
      modal.classList.add('is-visible');
    } else {
      // console.log(e.target.id)
      modal.classList.remove('is-visible');
    }
  }
})

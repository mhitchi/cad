let imgBtn = document.getElementById('vid');
let modal = document.getElementById('vidModal');
let iframe = document.getElementById('iframe');

imgBtn.addEventListener('click', () => {
  modal.classList.add('is-visible');
  modal.style.display = "block";
  iframe.src = "https://www.youtube.com/embed/jnAw6pPrujk?autoplay=1?rel=0";
  // iframe.autoplay = true;
  // iframe.load();
  document.onclick = function(e) {
    if (e.target.id == "vidModal" || e.target.id == "vid") {
      // console.log(e.target.id)
      modal.classList.add('is-visible');
    } else {
      // console.log(e.target.id)
      modal.classList.remove('is-visible');
      iframe.src = "";
    }
  }
})

let patchArr = Array.from(document.getElementsByClassName("patches"));
let bigPatchArr = Array.from(document.getElementsByClassName("patchesBig"));
let lightbox = document.getElementById("lightbox");

for (let i = 0; i < patchArr.length; i++) {
  patchArr[i].addEventListener("click", () => {
    document.onclick = function(e) {
    if (e.target.id == (`patches${i}`) || e.target.id == (`patchesBig${i}`)) {
      // console.log(e.target.id)
      lightbox.classList.add("is-visible")
      bigPatchArr[i].classList.add("is-visible")
    } else {
      // console.log(e.target.id)
      bigPatchArr[i].classList.remove("is-visible")
    }
  }
  })
}

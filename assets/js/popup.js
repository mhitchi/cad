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

// let patchArr = Array.from(document.getElementsByClassName("patches"));
// let bigPatchArr = Array.from(document.getElementsByClassName("patchesBig"));
// let lightbox = document.getElementById("lightbox");

// for (let i = 0; i < patchArr.length; i++) {
//   patchArr[i].addEventListener("click", () => {
//     document.onclick = function(e) {
//     if (e.target.id == (`patches${i}`) || e.target.id == (`patchesBig${i}`)) {
//       // console.log(e.target.id)
//       lightbox.classList.add("is-visible")
//       bigPatchArr[i].classList.add("is-visible")
//     } else {
//       // console.log(e.target.id)
//       bigPatchArr[i].classList.remove("is-visible")
//     }
//   }
//   })
// }

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

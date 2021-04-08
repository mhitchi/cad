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
let btns = Array.from(document.getElementsByClassName("lightboxBtn"));
let index;

for (let i = 0; i < patchArr.length; i++) {
  patchArr[i].addEventListener("click", () => {
    document.onclick = function(e) {
      let evtID = e.target.id
      switch(evtID) {
        case `patches${i}`:
          lightbox.classList.add("is-visible");
          bigPatchArr[i].classList.add("is-visible");
          btns.forEach(btn => btn.classList.add("is-visible"));
        break;
        case `patchesBig${i}`: 
          lightbox.classList.add("is-visible");
          bigPatchArr[i].classList.add("is-visible");
        break;
        case "prev":
          lightbox.classList.add("is-visible");
          if (i >= 1) {
            bigPatchArr[i-1].classList.add("is-visible");
          } else {
            bigPatchArr[i+2].classList.add("is-visible");
          }
        break;
        case "next":
          lightbox.classList.add("is-visible");
          if (i < 2) {
            bigPatchArr[i+1].classList.add("is-visible");
          } else {
            bigPatchArr[i-2].classList.add("is-visible");
          }
        break;
        default: 
          bigPatchArr.forEach(patch => {
            patch.classList.remove("is-visible")
          });
      }
    }
  })
  
}

//get current image's index in bigPatchArr
  bigPatchArr.forEach(img => {
    if (img.classList.contains("is-visible")) {
      index = bigPathArr.indexOf(img);
    }
  })

document.getElementById('prev').addEventListener("click", () => {
  if (index >= 1) {
    bigPatchArr[index-1].classList.add("is-visible");
  } else {
    bigPatchArr[index+2].classList.add("is-visible")
  }
})

document.getElementById('next').addEventListener("click", () => {
  if (index >= 1) {
    bigPatchArr[index+1].classList.add("is-visible");
  } else {
    bigPatchArr[index-2].classList.add("is-visible")
  }
})


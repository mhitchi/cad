// When the user scrolls down 100px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.height = "150px";
  } else {
    document.getElementById("header").style.height = "200px";
  }
}
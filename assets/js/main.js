var mobile = window.matchMedia("(max-width: 600px)");
var landscape = window.matchMedia("(min-width: 601px)");

// When the user scrolls down 100px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.height = "100px";
    document.getElementById("logo").style.height = "120px";
    if (mobile.matches) {
      document.getElementById("logo").style.margin = "0 120px";
    } else if (landscape.matches) {
      document.getElementById("logo").style.margin = "0 0 !important";
    }
    document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0.75)";
  } else {
    document.getElementById("header").style.height = "160px";
    document.getElementById("logo").style.height = "220px";
    if (mobile.matches) {
      document.getElementById("logo").style.margin = "0 80px";
    } else if (landscape.matches) {
      document.getElementById("logo").style.margin = "0 0 !important";
    }
    document.getElementById("header").style.backgroundColor = "rgba(0,0,0,1)";
  }
}

scrollFunction(mobile); // Call listener function at run time
mobile.addListener(scrollFunction); // Attach listener function on state changes

scrollFunction(landscape); // Call listener function at run time
landscape.addListener(scrollFunction); // Attach listener function on state changes

const show = () => {
  document.getElementById("vid").src = "assets/images/placeholder-vid-bg03.jpg";
}

const hide = () => {
  document.getElementById("vid").src = "assets/images/placeholder-vid-bg02.jpg";
}


CountDownTimer('04/17/2021 10:1 AM', 'countdown');
CountDownTimer('04/24/2021 10:1 AM', 'newcountdown');

function CountDownTimer(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = '0';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        // document.getElementById(id).innerHTML = days /*+ ' days'*/;
        //document.getElementById(id).innerHTML += hours + 'hrs ';
        //document.getElementById(id).innerHTML += minutes + 'mins ';
        //document.getElementById(id).innerHTML += seconds + 'secs';
    }

    timer = setInterval(showRemaining, 10000);
}

//tab functionality
//get array of .nav-link
//forEach, on-click, make .tab-pane class active
////remove active from other 2
const navLinkArr = Array.from(document.getElementsByClassName("nav-link"));
const tabArr = Array.from(document.getElementsByClassName("tab-pane"));

navLinkArr.forEach(link => {
  link.addEventListener("click", function () {
    //if tab id fits in nav-link id
    //add "active" to tab class and nav-link class
    tabArr.forEach(tab => {
      if(link.id.indexOf(tab.id) > -1){
        tab.classList.add("show");
        tab.classList.add("active");
        link.classList.add("active");
      } else if(link.id.indexOf(tab.id) <= -1) {
        tab.classList.remove("show");
        tab.classList.remove("active");
        link.classList.remove("active");
      }
    })
  })
})

const stickerArr = Array.from(document.getElementsByClassName("sticker"));
const incentiveArr = Array.from(document.getElementsByClassName("incentive"));

stickerArr.forEach(sticker => { 
  sticker.addEventListener("mouseenter", function() { 
    incentiveArr.forEach(incentive => {
    incentive.classList.remove("hidden");
    incentive.classList.add("animate__fadeIn");
    incentive.classList.remove("animate__fadeOut");
    sticker.classList.remove("animate__pulse");
    }); 
  });
  sticker.addEventListener("mouseout", function() { 
    incentiveArr.forEach(incentive => {
    incentive.classList.add("animate__fadeOut");
    incentive.classList.add("hidden");
    incentive.classList.remove("animate__fadeIn");
    sticker.classList.add("animate__pulse");
    }); 
  });
})
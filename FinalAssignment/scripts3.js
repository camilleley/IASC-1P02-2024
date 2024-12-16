//countdown clock
//countdown clock code from https://www.w3schools.com/howto/howto_js_countdown.asp

var countDownDate = new Date("Jan 2, 2025 10:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s until 50&#37; off day";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//JS code for slideshow from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}

//Human age into cat years
function ageSubmitOne() {

    var a = document.getElementById("ageFormOne").value;

    if (a => 40) {
        var b = a - 40;
        var c = b / 4;
        var d = c + 6;

        var e = Math.round(d);

        document.getElementById("answerOne").innerHTML = "You are " + e +" years old in cat years";
    }else{
        var b = a - 1;
        var c = b * 3;
        var d = c / 19;

        var e = Math.round(d);

        document.getElementById("answerOne").innerHTML = "You are" + e +"years old in cat years";
    }
}

//Cat age into human years
function ageSubmitTwo() {

    var a = document.getElementById("ageFormTwo").value;

    if (a => 6) {
        var b = a - 6;
        var c = b * 4;
        var d = c + 40;

    document.getElementById("answerTwo").innerHTML = "Your cat is " + d +" years old in human years";
    }else{
        var b = a * 19;
        var c = b / 3;
        var d = c + 1;

        document.getElementById("answerTwo").innerHTML = "Your cat is " + d +" years old in human years";
    }
}

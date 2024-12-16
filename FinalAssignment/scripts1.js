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

//Popup prompt
//modified code from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout
const myTimedPrompt = setTimeout(discountEmail, 5000);

function discountEmail() {
    myPrompt = prompt("Enter your email for 10% your next visit");
    console.log(myPrompt);
}

//reservation form
function formSubmit() {
    console.log(document.getElementById("nameForm").value);
    console.log(document.getElementById("numberForm").value);
    console.log(document.getElementById("emailForm").value);
    console.log(document.getElementById("adults").value);
    console.log(document.getElementById("children").value);

    //reset form code from: https://www.tutorialspoint.com/How-to-reset-or-clear-a-form-using-JavaScript
    var clearForm = document.getElementById("reservationForm");

    clearForm.reset();
}

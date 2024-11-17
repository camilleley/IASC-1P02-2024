var start = new Date();


function stopTime () {
    var stop = new Date();

    var passedTime = (stop - start.getTime()) / 1000;

    var myAlert = alert("You have been on the page for:" + " " + passedTime + " " + "seconds")
}

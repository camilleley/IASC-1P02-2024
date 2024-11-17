function equals() {
    var a = document.getElementById("numberOne").value;
    var b = document.getElementById("numberTwo").value;
    var c = Number(a) + Number(b);
    document.getElementById("output").innerHTML = c;
}

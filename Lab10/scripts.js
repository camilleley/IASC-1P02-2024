function plusBttn(){
    var a = document.getElementById("firstNum").value;
    var b = document.getElementById("secondNum").value;
    var c = Number(a) + Number(b);
    document.getElementById("result").innerHTML = c;
}

function minusBttn(){
    var a = document.getElementById("firstNum").value;
    var b = document.getElementById("secondNum").value;
    var c = Number(a) - Number(b);
    document.getElementById("result").innerHTML = c;
}

function timesBttn(){
    var a = document.getElementById("firstNum").value;
    var b = document.getElementById("secondNum").value;
    var c = Number(a) * Number(b);
    document.getElementById("result").innerHTML = c;
}

function divideBttn(){
    var a = document.getElementById("firstNum").value;
    var b = document.getElementById("secondNum").value;
    var c = Number(a) / Number(b);
    document.getElementById("result").innerHTML = c;
}

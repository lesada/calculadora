function onOff() {
    var isOnOff = document.getElementById("onOff");
    var display = document.getElementById("display");

    isOnOff.innerText == "On" ? isOnOff.innerText = "Off" : isOnOff.innerText = "On";

    if (isOnOff.innerText == "On") {
        display.style.backgroundColor = "#313131";
        display.disabled = true;
    }
    else {
        display.style.backgroundColor = "#798369";
        display.disabled = false;
    }
    clearNumeros();
}

function displayButtons(button) {
    var isOnOff = document.getElementById("onOff");
    var display = document.getElementById("display");

    if(isOnOff.innerText == "Off") 
    display.value += button;
}

function clearNumeros() {
    var display = document.getElementById("display");
    display.value = "";
}

function calcular() {
    var display = document.getElementById("display");
    display.value = eval(display.value);
}
function onOff() {
    let isOnOff = document.getElementById("onOff");
    let display = document.getElementById("display");

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
    let isOnOff = document.getElementById("onOff");
    let display = document.getElementById("display");

    if(isOnOff.innerText == "Off") 
    display.value += button;
}

function clearNumeros() {
    let display = document.getElementById("display");
    display.value = "";
}

function calcular() {
    let display = document.getElementById("display");
    display.value = eval(display.value);
}
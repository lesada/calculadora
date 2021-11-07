function onOff() {
    var button = document.getElementById("onOff");
    var display = document.getElementById("display");

    button.innerText == "On" ? button.innerText = "Off" : button.innerText = "On";

    if (button.innerText == "On") {
        display.style.backgroundColor = "#313131";
        clearNumeros();
    }
    else {
        display.style.backgroundColor = "#798369";
        clearNumeros();

    }
}

function displayButtons(button) {
    var display = document.getElementById("display");
    display.value += button;
}

function clearNumeros() {
    var display = document.getElementById("display");
    display.value = "";
}
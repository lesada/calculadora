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

    if (isOnOff.innerText == "Off")
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

document.addEventListener('keydown', function(event) {
    switch(event.keyCode)
    {
    case 48:
    case 96:
    displayButtons("0");
    break;

    case 49:
    case 97:
    displayButtons("1");
    break;

    case 50:
    case 98:
    displayButtons("2");
    break;

    case 51:
    case 99:
    displayButtons("3");
    break;

    case 52:
    case 100:
    displayButtons("4");
    break;

    case 53:
    case 101:
    displayButtons("5");
    break;

    case 54:
    case 102:
    displayButtons("6");
    break;

    case 55:
    case 103:
    displayButtons("7");
    break;

    case 56:
    case 104:
    displayButtons("8");
    break;

    case 57:
    case 105:
    displayButtons("9");
    break;
   

    default: return

    }

    console.log(event.keyCode)
});
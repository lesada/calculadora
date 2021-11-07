function onOff() {
    var button = document.getElementById("onOff");
    
    button.innerText == "On" ? button.innerText = "Off" : button.innerText = "On";   
}

function displayNumeros(num) {
    var display = document.getElementById("display");
    display.value += num;
}

function clearNumeros() {
    var display = document.getElementById("display");
    display.value = "";
}
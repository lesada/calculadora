function onOff() {
    var button = document.getElementById("onOff");
    
    if(button.innerText == "On") 
    button.innerHTML = "Off";
    else
    button.innerHTML = "On";

    
}
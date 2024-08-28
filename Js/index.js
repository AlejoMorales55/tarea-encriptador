function encriptarPalabra(){
    var data = document.getElementById("customInput")
    var data = data.value.toLowerCase()

    data = data.replace(/a/, "ai")
    data = data.replace(/e/, "enter")
    data = data.replace(/i/, "imes")
    data = data.replace(/o/, "ober")
    data = data.replace(/u/, "ufat")



    document.getElementById("palabraProcesada").innerHTML = data
}


function desencriptarPalabra(){
    var data = document.getElementById("customInput")
    var data = data.value.toLowerCase()

    data = data.replace("enter", "e")
    data = data.replace("imes", "i")
    data = data.replace("ai", "a")
    data = data.replace("ober", "o")
    data = data.replace("ufat", "u")


    document.getElementById("palabraProcesada").innerHTML = data
}


function copyElement(){

    let element = document.getElementById("palabraProcesada");

    let range = document.createRange();
    range.selectNode(element);

    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range);

    document.execCommand('copy');

    alert("Palabra copiada")
}
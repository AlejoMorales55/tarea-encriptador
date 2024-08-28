function encriptarPalabra(){
    var data = document.getElementById("customInput")
    var data = data.value.toLowerCase()

    data = data.replace("a", "enter")
    data = data.replace("e", "imes")
    data = data.replace("i", "ai")
    data = data.replace("o", "ober")
    data = data.replace("u", "ufat")


    document.getElementById("palabraProcesada").innerHTML = data
}


function desencriptarPalabra(){
    var data = document.getElementById("customInput")
    var data = data.value.toLowerCase()

    data = data.replace("enter", "a")
    data = data.replace("imes", "e")
    data = data.replace("ai", "i")
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
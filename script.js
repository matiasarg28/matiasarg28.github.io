

function botonencriptar(){
    var texto = document.getElementById("submit").value;
    
    var textEncriptado = texto.replace(/e/igm, "enter");
    var textEncriptado = textEncriptado.replace(/i/igm, "ines");
    var textEncriptado = textEncriptado.replace(/o/igm, "ober");
    var textEncriptado = textEncriptado.replace(/a/igm, "ai");
    var textEncriptado = textEncriptado.replace(/u/igm, "ufat");
    
    document.getElementById("des").innerHTML = textEncriptado;
    document.getElementById("des").style.display = "show";
    document.getElementById("des").style.display = "inherit";
    document.getElementById("img").style.display = "none";
    document.getElementById("button").style.display = "show";
    document.getElementById("button").style.display = "inherit";
    
}

function botonDesencriptar(){
    var texto = document.getElementById("submit").value;
    
    var textEncriptado = texto.replace(/enter/igm, "e");
    var textEncriptado = textEncriptado.replace(/ines/igm, "i");
    var textEncriptado = textEncriptado.replace(/ober/igm, "o");
    var textEncriptado = textEncriptado.replace(/ai/igm, "a");
    var textEncriptado = textEncriptado.replace(/ufat/igm, "u");
    
    document.getElementById("des").innerHTML = textEncriptado;
    document.getElementById("des").style.display = "show";
    document.getElementById("des").style.display = "inherit";
    document.getElementById("img").style.display = "none";
    document.getElementById("button").style.display = "show";
    document.getElementById("button").style.display = "inherit";
}

function copiar() {
    var content = document.querySelector("#des");
    content.select();
    document.execCommand("copy");
    alert("¡Se Copio!");
    
}








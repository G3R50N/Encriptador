
var botonuno = document.querySelector("#btn-1");
var botoncopiar = document.querySelector("#btn-copiar");

var encriptacionExitosa = "TEXTO ENCRIPTADO";
var desencriptacionExitosa = "TEXTO DESENCRIPTADO";

var si = "";
var no = "none";

function resultado(ver) {
    document.getElementById("contenedor-resultado").style.display = ver;
    document.getElementById("resultado").style.display = ver;
    document.getElementById("btn-copiar").style.display = ver;
}

resultado(no);

//============BOTON ENCRIPTAR ===================

function encriptartexto() {
    document.getElementById("contenedorimg").style.display = "none";
    var msjencriptado = "";
    var mensaje = document.getElementById("introducir-texto").value;
    var mayus = /[A-Z]/g;
    var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g; //expresion regular

    if (mensaje == "") {
        alert("no debe estar vacio")
        document.getElementById("contenedorimg").style.display = "";
        resultado(no);
    } else if (mensaje.match(mayus) != mensaje.match(mayus)) {
        alert("NO PUEDE CONTENER MAYUSCULAS");
        document.getElementById("contenedorimg").style.display = "";
        document.getElementById("introducir-texto").value = "";
    } else if (mensaje.match(caracteres) != mensaje.match(caracteres)) {
        alert("No puede contener acentos ni caracteres especiales");
        document.getElementById("contenedorimg").style.display = "";
        document.getElementById("introducir-texto").value = "";
        resultado(no);
    }
    else {
        for (var i = 0; i < mensaje.length; i++) {
            if (mensaje[i] == "a", "e", "i", "o", "u") {
                var encriptando = mensaje[i]
                    .replace("e", "enter")
                    .replace("i", "imes")
                    .replace("a", "ai")
                    .replace("o", "ober")
                    .replace("u", "ufat");
            }
            msjencriptado = msjencriptado + encriptando;

        }

        document.getElementById("titulo-resultado").innerHTML = encriptacionExitosa;
        document.getElementById("resultado").innerHTML = msjencriptado;
        document.getElementById("introducir-texto").value = ""
        resultado(si);
    }


}
botonuno.onclick = encriptartexto

// ==========BOTON DESENCRIPTAR ================


var botondos = document.getElementById("btn-2");

function desencriptartexto() {
    document.getElementById("contenedorimg").style.display = "none";
    var msjDesencriptado = "";
    var mensaje = document.getElementById("introducir-texto").value;
    var mayus = /[A-Z]/g;
    var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

    if (mensaje == "") {
        alert("NO PUEDE ESTAR VACIO INGRESA TEXTO");
        document.getElementById("contenedorimg").style.display = "";
        resultado(no);
    } else if (mensaje.match(mayus) != mensaje.match(mayus)) {
        alert("No puedes colocar texto con mayusculas")
        document.getElementById("introducir-texto").value = "";
        document.getElementById("contenedorimg").style.display = "";
        resultado(no);
    }
    else if (mensaje.match(caracteres) != mensaje.match(caracteres)) {
        alert("No puedes introducir caracteres y acentos")
        document.getElementById("introducir-texto").value = "";
        document.getElementById("contenedorimg").style.display = "";
    }
    else {
        msjDesencriptado = mensaje.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
        document.getElementById("resultado").innerHTML = msjDesencriptado;
        document.getElementById("titulo-resultado").innerHTML = desencriptacionExitosa;
        document.getElementById("introducir-texto").value="";
        resultado(si);
    }
}

botondos.onclick = desencriptartexto

//=====####BOTON-COPIAR====####

function copiartexto() {
    var copiar = document.getElementById("resultado");
    copiar.select();
    document.execCommand("copy");
}

botoncopiar.onclick = copiartexto;
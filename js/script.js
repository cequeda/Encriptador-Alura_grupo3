 var input = document.querySelector("textarea");
 input.focus();

 var codigo = ["ai", "enter", "imes", "ober", "ufat"];
 var vocales = ["a", "e", "i", "o", "u"];
 var cantida = [2, 5, 4, 4, 4];
 var guardado = [];
 var encritado = "";
 var encritado2 = "";

 function guardar() {
     var palabra = document.getElementById("texto1").value;
     if (palabra == "") {
         alert("No hay mensaje para encriptar");
     } else {
         var divrespuesta = document.querySelector("#borra");
         divrespuesta.classList.add("borrar");
     }
     guardado = palabra.split('');
     console.log(palabra.split(''));
 }

 function guardar2() {
     var palabra = document.getElementById("texto1").value;
     if (palabra == "") {
         alert("No hay mensaje para desencriptar");
     } else {
         var divrespuesta = document.querySelector("#borra");
         divrespuesta.classList.add("borrar");
     }
     guardado = palabra.split('');
     console.log(palabra.split(''));
 }

 function encriptar() {
     guardar();
     var cont = 0;
     var esta = false;
     while (cont < guardado.length) {
         for (var i = 0; i < vocales.length; i++) {
             if (guardado[cont] == vocales[i]) {
                 encritado = encritado + codigo[i];
                 esta = true;
                 break;
             }
         }
         if (esta == false) {
             encritado = encritado + guardado[cont];
         } else {
             esta = false;
         }
         cont++;
     }
     //document.write(encritado);
     document.getElementById("texto2").value = encritado;
     document.getElementById("texto1").value = "";
     encritado = "";
 }

 function desencriptar() {
     guardar2();
     var cont = 0;
     var esta = false;
     while (cont < guardado.length) {
         for (var i = 0; i < vocales.length; i++) {
             if (guardado[cont] == vocales[i]) {
                 if (vocales[i] == "a") {
                     cont = cont + 1;
                 }
                 if (vocales[i] == "e") {
                     cont = cont + 4;
                 }
                 if ((vocales[i] == "i") ||
                     (vocales[i] == "o") ||
                     (vocales[i] == "u")) {
                     cont = cont + 3;
                 }
                 /*if (vocales[i] == "o"){
                     cont = cont +3;
                     }
                 if (vocales[i] == "u"){
                     cont = cont +3;
                     }*/
                 encritado2 = encritado2 + vocales[i];
                 esta = true;
                 break;
             }
         }
         if (esta == false) {
             encritado2 = encritado2 + guardado[cont];
         } else {
             esta = false;
         }
         cont++;
         console.log(encritado2);
     }
     //document.write(encritado);
     document.getElementById("texto2").value = encritado2;
     document.getElementById("texto1").value = "";
     encritado2 = "";
 }

 function copiar() {
     /*var guardado = document.getElementById("texto2").value;
     document.getElementById("texto1").value = guardado;
     document.getElementById("texto2").value = "";*/

     var copyText = document.querySelector("#texto2");
     copyText.select();
     document.execCommand("copy");
 }

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

/*while(l < lineas){
    yi = 10 * l;
    xf = 10 * (l +1);
    dibujarlinea(colorcito, 0, yi, xf, 300);
    l++;
}*/

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick(){
    var x = parseInt(texto.value);
    var lineas = x;
    var l = 0;
    var yi, xf;
    var colorcito = "#FAA"
    var espacio = ancho / lineas;

    for(l=0; l < lineas; l++){
        yi = espacio * l;
        xf = espacio * (l +1);
        dibujarlinea(colorcito, 0, yi, xf, 300);
    }
    
    dibujarlinea(colorcito, 1, 1, 1, 299);
    dibujarlinea(colorcito, 1, 299, 299, 300);
}
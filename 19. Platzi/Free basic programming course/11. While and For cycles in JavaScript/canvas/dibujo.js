var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "#FAA"

/*while(l < lineas){
    yi = 10 * l;
    xf = 10 * (l +1);
    dibujarlinea(colorcito, 0, yi, xf, 300);
    l++;
}*/

for(l=0; l < lineas; l++){
    yi = 10 * l;
    xf = 10 * (l +1);
    dibujarlinea(colorcito, 0, yi, xf, 300);
}

dibujarlinea(colorcito, 1, 1, 1, 299);
dibujarlinea(colorcito, 1, 299, 299, 300);

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
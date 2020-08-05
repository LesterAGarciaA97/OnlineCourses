var teclas = {  //JSON = Java Script Object Notation
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);

function dibujarTeclado(evento){
    /*if(evento.keyCode == teclas.UP){

    }

    if(evento.keyCode == teclas.DOWN){
        
    }

    if(evento.keyCode == teclas.LEFT){
        
    }

    if(evento.keyCode == teclas.RIGHT){
        
    }*/

    switch(evento.keyCode){
        case teclas.UP:
            break;
        case teclas.DOWN:
            break;
        case teclas.LEFT:
            break;
        case teclas.RIGHT:
            break;
        default:
            console.log("Utilice las teclas indicadas");
            break;
    }
}
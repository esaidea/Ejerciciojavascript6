
console.log('Ejercicio-a')

var cantidadDeGatos = 10;

var contador = 1;
var emoji = '';
for (let i = 1; i <= cantidadDeGatos; i++) {

    if(contador == 1) {
        emoji = '😺';
    }else if (contador == 2){
        emoji = '😸';
    }else{
        emoji = '😹';
        contador = 0;
    }

    console.log('Gato #' + i + ':' + emoji);

    contador++;
}
console.log('Ejercicio-b')

var cantidadDeGatos = 5;
var cantidadDePasos = 2;

var emojiPasos = '';

// ESTE FOR ME SIRVE PARA CONCATENAR LOS EMOJIS SEGUN LA VARIABLE cantidadDePasos
for (let j = 1; j <= cantidadDePasos; j++) {
    emojiPasos = emojiPasos + '🐾';
}

// EN ESTE FOR MOSTRAMOS POR CONSOLA LA CANTIDAD DE GATOS JUNTO A LA CANTIDAD DE PASOS. 
for (let i = 1; i <= cantidadDeGatos; i++) {
    console.log('Gato #'+ i +':🐈' + emojiPasos);
}


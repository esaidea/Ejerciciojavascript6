console.log('Ejercicio-c')

var cantidadDeGatos = 8;
var cantidadDePasos = 2;
var emojiPasos = '';

// ESTE FOR ME SIRVE PARA CONCATENAR LOS EMOJIS SEGUN LA VARIABLE cantidadDePasos
for (let j = 1; j <= cantidadDePasos; j++) {
    emojiPasos = emojiPasos + '🐾';
}

for (let i = 1; i <= cantidadDeGatos; i++) {

    if( i % 2 == 0){
        console.log('Gato #'+ i + ':🐈⬛' + emojiPasos);
    }else{
        console.log('Gato #'+ i + ':🐈' + emojiPasos);
    }

}
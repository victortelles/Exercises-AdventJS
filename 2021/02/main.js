export default function listGifts(letter) {
    // Declarar variable para almacenar objetos
    const objetos = {};
    // Variable para construir la palabra actual
    let palabraActual = "";

    //Recorrido para procesar cada caracter de la carta
    for (let i = 0; i < letter.length; i++) {
        const caracter = letter[i];
        // Si el caracter no es un espacio, agregarlo a la palabra actual
        if (caracter !== " ") {
            palabraActual += caracter;
        } else {
            // Si la palabra actual no esta vacia y no esta tachada, agregarla al objeto
            if (palabraActual !== "" && palabraActual[0] !== "_") {
                if (objetos[palabraActual]) {
                    objetos[palabraActual]++;
                } else {
                    objetos[palabraActual] = 1;
                }
            }
            // reiniciar la palabra 
            palabraActual = "";
        }
    }

    // Procesar la última palabra si existe y no está tachada
    if (palabraActual !== "" && palabraActual[0] !== "_") {
        if (objetos[palabraActual]) {
            objetos[palabraActual]++;
        } else {
            objetos[palabraActual] = 1;
        }
    }

    return objetos;
}
// const carta = 'bici coche balón _playstation bici coche peluche'
// const regalos = listGifts(carta)

// console.log(regalos)
// /*
// {
//   bici: 2,
//   coche: 2,
//   balón: 1,
//   peluche: 1
// }
// */
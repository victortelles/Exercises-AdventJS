export default function contarOvejas(ovejas) {
    // aquí tu magia
    const filtradas = []

    //Recorrer el tamaño de la lista
    for (let i = 0; i < ovejas.length; i++) {
        //Declarar 1 sola oveja (name, color)
        const oveja = ovejas[i];

        // Validar color
        if (oveja.color !== 'rojo') continue

        // filtrar nombre 
        const name = oveja.name;

        //Banderas
        let charA = false;
        let charN = false;

        //Recorrer catacteres
        for (let j = 0; j < name.length; j++) {
            //Obtener el caracter
            const caracter = name[j];

            //Validacion de caracteres
            if (caracter === 'a' || caracter === 'A') charA = true;
            if (caracter === 'n' || caracter === 'N') charN = true;
        }
        //Validar banderas
        if (charA && charN) {
            filtradas.push(oveja)
        }
    }

    return filtradas
}


// const ovejas = [
//     { name: 'Noa', color: 'azul' },
//     { name: 'Euge', color: 'rojo' },
//     { name: 'Navidad', color: 'rojo' },
//     { name: 'Ki Na Ma', color: 'rojo' },
//     { name: 'AAAAAaaaaa', color: 'rojo' },
//     { name: 'Nnnnnnnn', color: 'rojo' }
// ]

// const ovejasFiltradas = contarOvejas(ovejas)

// console.log(ovejasFiltradas)

// // [{ name: 'Navidad', color: 'rojo' },
// //  { name: 'Ki Na Ma', color: 'rojo' }]

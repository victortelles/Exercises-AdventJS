/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
    // Code here

    const toys = []

    //obtener cada elemento del objeto completo "giftsToProduce"
    for (let item of giftsToProduce) {
        const { toy, quantity } = item

        //Validar que no sea negativo
        if (isNaN(quantity) || quantity <= 0) {
            continue    //Ignorar
        }

        //Repetir el jugete
        for (let i = 0; i < quantity; i++) {
            toys.push(toy)
        }

    }
    //retorna
    return toys
}


//------------Ejemplos-----------------

const production1 = [
    { toy: 'car', quantity: 3 },
    { toy: 'doll', quantity: 1 },
    { toy: 'ball', quantity: 2 }
]

const result1 = manufactureGifts(production1)
console.log(result1)
// ['car', 'car', 'car', 'doll', 'ball', 'ball']

const production2 = [
    { toy: 'train', quantity: 0 }, // no se fabrica
    { toy: 'bear', quantity: -2 }, // tampoco
    { toy: 'puzzle', quantity: 1 }
]

const result2 = manufactureGifts(production2)
console.log(result2)
// ['puzzle']

const production3 = []
const result3 = manufactureGifts(production3)
console.log(result3)
// []
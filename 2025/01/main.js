/**
 * @param {string[]} gifts - The array of gifts to filter
 * @returns {string[]} An array with the unique filtered gifts
 */

function filterGifts(gifts) {
    // Code here

    const regalo = []         //Caja Vacia
    //recorrer arreglo por elemento
    for (const gift of gifts) {
        //Validar si contiene #
        if (gift.includes("#")) {
            continue    //Ignorar
        }
        // Almacenar regalos validos
        regalo.push(gift)

    }
    //regresar la caja con regalos validos
    return regalo
}


//------------Ejemplos-----------------
const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const good1 = filterGifts(gifts1)
console.log(good1)
// ['car', 'ball']


const gifts2 = ['#broken', '#rusty']
const good2 = filterGifts(gifts2)
console.log(good2)
// []

const gifts3 = []
const good3 = filterGifts(gifts3)
console.log(good3)
// []


const gifts4 = ['game', 'poster', 'sticker#bad', 'console']
const good4 = filterGifts(gifts4)
console.log(good4)
// ['game', 'poster', 'console']

const gifts5 = ['#bad', 'car', '#oops', 'ball']
const good5 = filterGifts(gifts5)
console.log(good5)
// ['car', 'ball']

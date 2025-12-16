/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
    // Code here

    let result = ""

    // condicion: 2 o menos - regresa vacio
    if (size < 2) {
        return ""
    }


    //Fila
    for (let x = 0; x < size; x++) {
        let linea = ""

        //columnas
        for (let y = 0; y < size; y++) {

            if (y === 0 || x === 0 || x === size - 1 || y === size - 1) {
                linea += symbol;
            }
            else {
                linea += " ";
            }
        }

        result += x < size - 1 ? linea + "\n" : linea;
    }

    return result
}

//------------Ejemplos-----------------

const g1 = drawGift(4, '*')
console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 */

const g2 = drawGift(3, '#')
console.log(g2)
/*
###
# #
###
*/

const g3 = drawGift(2, '-')
console.log(g3)
/*
--
--
*/

const g4 = drawGift(1, '+')
console.log(g4)
// ""  pobre becario…


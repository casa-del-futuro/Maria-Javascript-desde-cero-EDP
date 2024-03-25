/**
 *  Esta funcion realiza de suma de A y B
 * @param {*} a Recibe un numero entero
 * @param {*} b Recibe un numero entero
 * @returns devuelve el resultado de a + b
 */
function suma(a , b){
    console.log( a +b)
}
function resta(a , b){
    console.log( a - b);
}
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns Devuelve la multiplicacion de a * b
 */
function multi(a , b){
    return a *b
}
function div(a , b){
    console.log( a /b)
}
function mod(a , b){
    console.log( a % b);
}


module.exports = {
    suma,
    resta,
    multi,

}
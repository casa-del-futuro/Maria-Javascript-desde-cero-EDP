console.log(sumar(5,6))

function sumar(num1,num2){
    const resultado = num1 + num2
    return resultado;
}
// var num;

console.log(num2)
let num2;
console.log(num)

var num = 5;



restar(5,4)

const restar = function (a, b){
    return a - b;
}


restar(11, 5) // no devuelve nada -> pero imprime el resultado en consola!
console.log(restar(11, 5)) // si devuelve pero undefined -> e imprime el resultado en consola!


const multiplicacion = (a,b) => {
    const res = a * b;
    return res;
} 

console.log(multiplicacion(2,4))


const division = (a,b) => a / b;

console.log(division(10,2))



let arr = ["a", "b", "c", "d"]

arr.map( (a, index) => console.log(a + " -> index: " + index))
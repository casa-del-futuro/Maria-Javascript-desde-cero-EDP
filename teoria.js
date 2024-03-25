const { array } = require("yargs");

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


// String



console.log(alumnos)

// push => agrega al final de la lista
alumnos.push("Facundo")
alumnos.push("Fernando")
alumnos.push("Hugo")
// unshift => agrega al principio de la lista
alumnos.unshift("Ludmi")
alumnos.unshift("Maria")
alumnos.unshift("Matias")
// shift => quitar al principio de la lista
alumnos.shift()
alumnos.shift()
alumnos.shift()
// pop => quitar al final de la lista
alumnos.pop()
alumnos.pop()
alumnos.pop()
//____________
console.log(alumnos)

for (let i = 0; i < alumnos.length; i++) {
    if(alumnos[i] === "Cristian"){
        alumnos[i] = "Tomi"
    } 
}

alumnos[1] = "Onelia"
console.log(alumnos)

let matriz = [[1,2,3,5,6,7],[4,5,6],[7,8,9]]

matriz.forEach( (array) => {
    array.find( num => {
       return num === '1'
    })
})

let alumnos = ["Anabel", "Betrix", "Cristian", "Dario"]
// ForEach 
  const restuldoForEach =  alumnos.forEach((alumno) => alumno)
    console.log("ForEach: " + restuldoForEach)
    // Map
    const restuldoMap =  alumnos.map((alumno) => alumno)
    console.log("Map: " + restuldoMap)
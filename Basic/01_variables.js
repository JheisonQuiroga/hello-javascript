/* VARIABLES 
Son contenedores en donde se almacenan valores y después se trabaja
con dichos valores.

Para nombrar las variables se utiliza el método camelCase ej. myVar1.

Existen 3 formas de crear una variable:
*/

// var

/* Forma inicial para crear variables, por lo cual no es muy recomendada */

var helloWorld = "Hello, World!"
console.log(helloWorld)

// Reasignando variables

helloWorld = "Hello"
console.log(helloWorld)

// var es soportado para navegadores antiguos, y let y const se integraron en 2015

// let

let helloWorld2 = "Hello, World"
console.log(helloWorld2) 

// Reasignando variables con let

helloWorld2 = 10
console.log(helloWorld2) 

// Podemos asignar una variable sin un valor definido

let myVar1
console.log(myVar1) // undefined

// const

// Una constante no puede modificar su valor en el tiempo

const helloWorld3 = "Hola, Mundo!"
console.log(helloWorld3) // Hola, Mundo!

// Lo siguiente genera error = TypeError
// helloWorld3 = "Hola, Duban!"
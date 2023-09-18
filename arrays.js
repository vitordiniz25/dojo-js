let numeros = [1, 2, 3, 4, 5]

// console.log(numeros[2])
// console.log(numeros.length)

// for(let i=0; i < numeros.length; i++){
//     console.log(numeros[i])
// }

// numeros.pop()
// numeros.push(6)


// console.log(numeros)

let array = [1, 2, 3, 4, 5]

let dobrados = array.map(function(numero) {
    return numero*2
})

// console.log(dobrados)

const dobrar = num => num*2

let dobrados2 = array.map(item => dobrar(item))
// console.log(dobrados2)

let pares = numeros.filter(function(numero) {
    return numero % 2 === 0
})

// console.log(pares)

let frutas = ['maça', 'banana', 'melancia']

frutas.forEach(function(fruta) {
    console.log('Eu gosto de ' + fruta)
})
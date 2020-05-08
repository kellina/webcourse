const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove ultimo elemento do array
console.log(pilotos)

pilotos.push ('Verstappen') //add elemento no final do array
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //add elemento no inicio
console.log(pilotos)

//Splice pode add ou remover elementos
//Add
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

//Remove
pilotos.splice(3, 1)
console.log(pilotos)

//Slice gera uma novo array, a partir de um 'pedaço' do array
const algunspilotos1 = pilotos.slice(2)
console.log(algunspilotos1)

const algunspilotos2 = pilotos.slice(1, 4)
console.log(algunspilotos2)


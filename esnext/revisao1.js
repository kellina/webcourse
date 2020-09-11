// let e const
{
  var a = 2
  let b = 3
  console.log(b)
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)


// Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametro defaut
function log(texto = 'Node'){
  console.log(texto)
}
log()
log('Sou mais forte')

//Operador rest (...) -> agrupa os paramentros da função em um array
function total(...numeros){
  let total = 0
  numeros.forEach(n => total += n)
  return total
}
console.log(total(2, 3, 4, 5))




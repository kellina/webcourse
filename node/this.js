//This fora da função aponta para exports
console.log(this === global)
console.log(this === module.exports)

//This dentro da função aponta para global
function logThis(){
  console.log('Dentro de uma função...')
  console.log(this === module.exports)
  console.log(this === global)
}
logThis()
let dobro = function(a) {
  return 2 * a
}
//mesma função de forma reduzida usando arrow function
dobro = (a) => {
  return 2 * a
}
//mesma função mais reduzida
dobro = a => 2 * a //return implicito qdo tem apenas 1 linha
console.log(dobro(Math.PI))

//outro exemplo
let ola = function() {
  return 'Olá1'
}
//mesma função de forma reduzida
ola = () => 'Olá!'
console.log(ola())
//Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble.
//Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros,
//o segundo com strings e o terceiro com valores decimais.
//Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes
//para unir os vetores, e mostre o resultado no console.
//Todos os elementos do vetor resultado deverão aparecer no console.
function imprimirVetores(vetorInteiro, vetorString, vetorDouble) {
  return vetorInteiro.concat(vetorString).concat(vetorDouble);
}
let vetorInteiro = [1, 2, 3, 4];
let vetorString = ["um", "dois", "tres", "quatro"];
let vetorDouble = [0.1, 0.2, 0.3, 0.4];
console.log(imprimirVetores(vetorInteiro, vetorString, vetorDouble));




function concat() {
  let vetor = [];
  for(let i = 0; i < arguments.length; i++) {
    vetor = vetor.concat(arguments[i])
  }
  return vetor;
}
console.log(concat([1, 2, 3, 4],['um', 'dois'], [2.5], [7,9,5,], 'um', 15))

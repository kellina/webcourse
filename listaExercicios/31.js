//algoritmo percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.

function inteiros(vetor) {
  let negativos = 0
  for(let i = 0; i < vetor.length; i++) {
    if(vetor[i] < 0) {
      negativos++
    }
  }
  return negativos
}

vetor = [-3, -1, 0, 1, 2, 3, 4, 5, 6,-6]
console.log(inteiros(vetor))

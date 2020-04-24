//calcule a média aritmética dos valores de um vetor de inteiros.
function media(vetor) {
  let numeros = 0
  for (let i = 0; i < vetor.length; i++) {
    numeros += vetor[i] //não sabia essa parte!
  }
  return numeros / vetor.length
}

vetor = [1, 2, 3, 4]
console.log(media(vetor))
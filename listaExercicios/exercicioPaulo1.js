//Dado um array de inteiros. Encontre e imprima o maior valor.
function maiorValor(vetor) {
  let maior = 0
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > maior) {
      maior = vetor[i]
    } 
  }
  return maior
}


vetor = [20, 100, 15, 31, 12]
console.log(maiorValor(vetor))
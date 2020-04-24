function contarNumeros(vetor) {
  let numerosDentro = 0
  let numerosFora = 0
  for(let i = 0; i < vetor.length; i++) {
    if (vetor[i] >= 10 && vetor[i] <= 20) {
      numerosDentro++
    } else {
      numerosFora++
    }
  }
  return `${numerosDentro} números de 10 a 20 dentro do vetor e ${numerosFora} números fora.`
}

vetor = [1, 2, 4, 5, 10, 12, 15, 18, 19, 23, 25, 30]
console.log (contarNumeros(vetor))
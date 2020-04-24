//​ Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
function parImpar (vetorNumeros) {
  let par = 0
  let impar = 0
  
  for(let i = 0; i < vetor.length; i++) {
    if(vetorNumeros[i] % 2 == 0) {
      par++
    } else {
      impar++
    }
  }
  console.log (`${par} números pares e ${impar} numeros impares.`)
}

vetor = [2, 4, 6, 13, 18, 20, 22]
parImpar(vetor)
function valorPago(idade) {
  if (idade < 10) {
    return 180
  } else if (idade >= 10 && idade < 30) {
    return 150
  } else if (idade >= 30 && idade <= 60) {
    return 195
  } else if (idade > 60){
    return 230
  }
}

console.log(valorPago(8))
console.log(valorPago(33))
console.log(valorPago(61))
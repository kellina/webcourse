function valorPago(mes, valorAnuidade) {
  return valorAnuidade * Math.pow(1 + 0.05, mes - 1)
  
}
console.log(valorPago(1, 100))
console.log(valorPago(2, 100))
console.log(valorPago(3, 100))

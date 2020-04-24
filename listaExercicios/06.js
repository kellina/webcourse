function jurosSimples (c, i, t){
  const juros = c * i * t
  const montante = juros + c
  return montante
}

const montante = jurosSimples(1200, 0.025, 10)
console.log(montante)



function jurosCompostos (c, i, t){
  const valor = c * Math.pow(1 + i, t)
  return valor.toFixed(2)
}

console.log(jurosCompostos(500, 0.01, 8))
function formataMoeda (valor) {
  const valorFormatado = valor.toFixed(2).replace('.', ',')
  return `R$ ${valorFormatado}`
}

resultado = formataMoeda (0.1 + 0.2)
console.log(resultado)
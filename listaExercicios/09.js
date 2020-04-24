function notas (nota) {
  let resto = nota % 5
  if (resto < 3) {
    nota -= resto
  } else {
    nota += 5 - resto
  }
  
  if (nota < 40) {
    console.log ('reprovado')
  } else {
    console.log ('aprovado')
  }
}

notas(80)
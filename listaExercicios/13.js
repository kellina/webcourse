function diaSemana (dia) {
  switch(dia) {
    case 6: case 5: case 4: case 3: case 2:
      return 'Dia útil!'
      break
    case 7: case 1:
      return 'Fim de semana!'
      break
    default:
      return 'Dia inválido!'
  }
}
console.log (diaSemana (1))
console.log (diaSemana (2))
console.log (diaSemana (3))
console.log (diaSemana (7))
console.log (diaSemana (8))
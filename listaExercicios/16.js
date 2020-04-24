function calcular (x, op, y) {
  switch (op) {
    case '+':
      return x + y
    case '-':
      return x - y
    case '*':
      return x * y  
    case '/':
      return x / y
    default:
      return 'Operação inválida'
  }
}

console.log(calcular(2, '+', 3))
console.log(calcular(2, '-', 3))
console.log(calcular(2, '*', 3))
console.log(calcular(2, '/', 3))
console.log(calcular(2, '%', 3))
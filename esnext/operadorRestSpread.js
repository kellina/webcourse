// Usar o spread com objeto:
const funcionario = {nome: 'Maria, salario: 12348.99'}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// Usar  spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoB = [1, 2, 3]
const grupoFinal = ['Maria', 'Rafaela', ...grupoA, ...grupoB]
console.log(grupoFinal)

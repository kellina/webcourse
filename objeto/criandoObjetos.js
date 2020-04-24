//Usando a notação literal --- usando chaves{}
const obj1 = {}
console.log(obj1)

//Usando o Object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Usando funções construtoras
function Produto(nome, preco, desc) {
  this.nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// A partir de Função Factory ---- fabrica objeto
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}
const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//A partir de Objetc.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna Objeto... JSON
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)

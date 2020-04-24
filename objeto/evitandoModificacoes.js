//Object.preventExtensions -> previne que o objeto seja extendido, ou seja,
//NÂO pode add novos atributos, mas pode excluir e modificar os já existentes.
const produto = Object.preventExtensions({ nome: 'Qualquer', preco: 1.99, tag: 'promocao'})
console.log('extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal -> selar; NÂO pode add novos atributos e nem excluir,
//mas pode modificar os valores dos atributos.
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze -> Selado + valores constantes!
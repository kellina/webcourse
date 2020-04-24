function valorLanche(código, quantidade) {
  switch (código) {
    case 100:
      return {nome: 'cachorro-quente', preco: quantidade * 3}
    case 200:
      return quantidade * 4
    case 300:
      return quantidade * 5.5
    case 400:
      return quantidade * 7.5
    case 500:
      return quantidade * 3.5
    case 600:
      return quantidade * 2.8

    default:
      return "Produto não existente.";
  }
}

let p1 = valorLanche(100, 1)
console.log(`${p.nome}: ${p.preco}`)
console.log(valorLanche(200, 1))
console.log(valorLanche(300, 2))
console.log(valorLanche(10, 1))


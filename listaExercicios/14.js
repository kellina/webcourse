function fruta(nome) {
  switch (nome) {
    case 'maçã':
      console.log('Não vendemos esta fruta aqui.')
      break;
    case 'kiwi':
      console.log('Estamos com escassez de kiwis.')
      break;
    case 'melancia':
      console.log('Aqui está, são 3 reais o quilo.')
      break;
    default:
      console.log('Erro no console.')
      break;
  }
}

fruta('maçã')
fruta('kiwi')
fruta('melancia')
fruta('banana')

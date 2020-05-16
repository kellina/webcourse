//fs - file system - padrão do node
const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

//Como ler arquivo de forma sincrona
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host} : ${config.db.port}`)
})

//Outra forma -> usando require
const config = require('./arquivo.json')
console.log(config.db)

//Para ler um diretorio
fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteúdo da pasta...')
  console.log(arquivos)
})
const pessoa = {
  saudacao: 'Bom dia!',
  falar() {
    console.log(this.saudacao)
  }
}
pessoa.falar()

//armazenando falar em uma constante
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


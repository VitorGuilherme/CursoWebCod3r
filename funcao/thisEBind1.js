const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)   //this acessando o atributo saudacao do objeto pessoa
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)  //bind sendo usado para resolver um objeto(this)
falarDePessoa()
// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana' }

Object.freeze(pessoa)  // óbviamente ele congela, ou impede de você tentar alterar o atrib

pessoa.nome = "Maria"
pessoa.end = "Rua Muito Grande"
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
//pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

// Desafio 1: Todos os alunos são bolsistas? Minha resolução
const todosBolsistas = alunos.map(a => a.bolsista).reduce(function (acumulador, atual) {
    if (acumulador == true && atual == true) {
        return true
    } else {
        return false
    }
})

console.log(todosBolsistas)

// Desafio 2? Algum aluno é bolsista? Minha resolução
const bolsistas = alunos.map(a => a.bolsista).reduce(function (acumulador, atual) {
    if (acumulador == true || atual == true) {
        return true
    } else {
        return false
    }
})

console.log(bolsistas)
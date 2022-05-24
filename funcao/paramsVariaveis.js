function soma() {
    let soma = 0
    for (i in arguments) {  //arguments é usado pra acessar os elemetos criados durante uma chamada
        soma += arguments[i]  // atribuição que vai ser feita entre soma e o índice de arguments
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))
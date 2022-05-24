let valor // não incializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro! Não se pode ler toString de algo nulo

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
delete produto.preço
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

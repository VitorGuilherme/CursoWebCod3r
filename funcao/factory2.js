function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Headset', 599.99))
console.log(criarProduto('Iphone', 5599.99))
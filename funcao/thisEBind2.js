function Pessoa() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000) // bind incrementando this ao objeto Pessoa
}

new Pessoa

function Pessoa() {
    this.idade = 0

    const self = this  //usando self como receptor de this para o incremento sem erro
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }, 1000)
}
new Pessoa
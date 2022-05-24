// par nome/valor
const saudacao = 'opa'  //contexto léxico 1 b  

function exec() {
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Vitor',
    idade: 20,
    peso: 83,
    endereço: {
        logradouro: 'Rua Monsenhor Nuno',
        numero: 123,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
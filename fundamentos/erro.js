function tratarErroELancar(erro) {
    //throw new Error('Sentimos muito pelo imprevisto, seu erro está sendo tratado.')
    //throw 10
    //throw true
    throw {
        nome: obj.name,                              //*objeto*
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')  //função que deixa letra maiúscula 
    } catch (e) {
        tratarErroELancar(e)
    }finally{
        console.log('Final')
    }
}

const obj = { nome: 'Vitor' }
imprimirNomeGritado(obj)
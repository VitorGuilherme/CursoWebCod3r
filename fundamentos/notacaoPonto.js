console.log(Math.floor(6.1)) // floor arredonda pra baixo
console.log(Math.ceil(6.1))  // ceil arredonda pra cima 

const obj1 = {}
obj1.nome = 'bola'
//obj1['nome'] = 'Bola 2'   -- é a mesma coisa só que construído diferente
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome   // atribuir uma função e torná-la pública usando this 
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
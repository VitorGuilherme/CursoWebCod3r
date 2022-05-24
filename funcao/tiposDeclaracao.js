console.log(soma(5, 6)) // a única forma de chamar uma função antes da declaração

//function declaration
function soma(x, y) {
    return x, y
}

//function expression
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 4))

//named function expression
const mult = function mult(x, y) {     //não é muito utilizado 
    return x * y
}
console.log(mult(3,4))
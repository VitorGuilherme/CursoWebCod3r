  //Função retorno
  function imprimirSoma(a, b){
    console.log(a + b)
  }
  
  imprimirSoma(2,3)
  imprimirSoma(2)
  imprimirSoma(2, 10, 5, 6, 8, 4, 6, 8)
  imprimirSoma()

  //Função retorno
  function soma(a, b = 1){
    return a + b   // retorna o valor armazenado ou algo assim 
  }
  console.log(soma(2, 3))
  console.log(soma(2))
  console.log(soma())
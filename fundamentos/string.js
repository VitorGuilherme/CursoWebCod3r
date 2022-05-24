const escola = "Cod3r"

console.log(escola.charAt(4)) // caractere na quarta posição 
console.log(escola.charAt(5)) // caractere na quinta posição
console.log(escola.charCodeAt(3)) // esse número vem da tabela unicode
console.log(escola.indexOf('3')) //número que está na terceira posição, xxx3x

console.log(escola.substring(1)) // vai se iniciar a partir do índice 1 
console.log(escola.substring(0, 3)) // vai do índice 0 ao 3 sem o 3

console.log('Escola '.concat(escola).concat('!')) // concatenando
console.log('Escola ' + escola + '!')

console.log(escola.replace(3, 'e')) //sustituição
console.log(escola.replace(/\d/, 'e')) // aquele rejecx sei la o que não fiz o curso
console.log(escola.replace(/\w/g, 'e')) // aquele rejecx sei la o que não fiz o curso

console.log('Ana,Maria,Pedro'.split(',')) // pode-se aplicar também o rejex sei la o que com  /,/

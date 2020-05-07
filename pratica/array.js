const lista = [1,4,2,7,5,3]
console.log(`O array é: ${lista}`)

// MAP
const novo = lista.map((valor,posição) => valor*10+posição*2)
console.log(`O novo array é ${novo}`)

// REDUCE
const soma = lista.reduce(function(total,atual){
    return total+atual
})
console.log(`A soma do array é: ${soma}`)

// FILTER
const impares = lista.filter(function (valor){
    return valor % 2 === 1
})
console.log(`Os números ímpares no array são: ${impares}`)

// FIND
const proc = lista.find(function(valor){
    return valor > 4
})
console.log(`O primeiro valor encontrado no array maior que 4 é: ${proc}`)

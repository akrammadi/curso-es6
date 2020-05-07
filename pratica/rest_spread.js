// REST OBJETO
const usuario = {
    nome: 'Akram',
    idade: 28,
    empresa:'Giro'
}

const {nome, ...resto} = usuario

console.log(nome)
console.log(resto)

//REST ARRAY
const lista = [2,4,5,6,7,8]

const [a,b,...c] = lista

console.log(a,b,c)

//REST FUNÇÃO
function soma(...parametros){
    return parametros.reduce((total,atual) => total+atual)
}
console.log(soma(1,2,3,5,4,7,10))

function arr(a,b, ...params){
    return params
}
console.log(arr(2,4,3,6,5,4,7))

//SPREAD
const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arr3 = [...arr1,...arr2,...arr1]

console.log(arr3)

//SPREAD OBJETOS
const usuario1 = {
    nome:'Akram',
    idade:28,
    empresa:'Giro'
}
const usuario2 = {...usuario1, nome:'Douglas'}
console.log(usuario1,usuario2)
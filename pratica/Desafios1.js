class Usuario {
    constructor(email,senha){
        this.email = email
        this.senha = senha
    }
    isAdmin(){
        return this.admin===true
    }
}

class Admin extends Usuario{
    constructor(){
        super()
        this.admin=true
        
    }
}
const User1 = new Usuario('akram@nada.com','1234')
const Adm1 = new Admin('akram@nada.com','1234')

console.log(User1.isAdmin())
console.log(Adm1.isAdmin())
console.log(User1)
console.log(Adm1)


// //2° Exercício
// // 2.1 - MAP
// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
//    ]
// const idd = usuarios.map(function (valor){
//     return valor.idade
// })
// console.log('Exercício 2.1:')
// console.log(idd)
// // 2.2 Filter
// const novo = usuarios.filter(function(valor) {
//     return valor.empresa==='Rocketseat' && valor.idade>18
// })
// console.log('Exercício 2.2:')
// console.log(novo)
// // 2.3 Find
// const gg = usuarios.find(valor => valor.empresa ==='Google')
// console.log('Exercício 2.3:')
// console.log(gg)

// //2.4 
// const mult = usuarios.map(function (valor){
//     const dobro = {...valor,idade:valor.idade*2}
//     return dobro 
// })
// console.log('Exercício 2.4:')
// //console.log(mult)


// const filt = mult.filter(valor => valor.idade<=50)
// console.log(filt)

// console.log('*************************************************************************************************')
// //Exercicio 3
// //3.1
// console.log('---------------')
// const arr = [1,2,3,4,5,6]
// const tres = arr.map(item => item+10)
// console.log(tres)
// //3.2
// console.log('---------------')
// const usuario32 = {nome:'Diego',idade:23}
// const novo32 = () => usuario32.idade
// console.log(novo32())
// //3.3
// console.log('---------------')
// const nome = "Diego";
// const idade = 23;
// const mostraUsuario = (nome='Di',idade=18) => ({nome,idade})
// // function mostraUsuario(nome = 'Diego', idade = 18) {
// //  return { nome, idade };
// // }
// console.log(mostraUsuario(nome, idade))
// console.log(mostraUsuario())
// //3.4
// console.log('---------------')
// const promise = () => new Promise((resolve, reject) => resolve())

// //Exercicio 4
//4.1 
// const empresa = {
//     nome:'Giro',
//     endereco:{
//         cidade:'Guaruja',
//         uf:'SP'
//     }
// }
// const {nome,endereco:{cidade},endereco:{uf}} = empresa
// console.log(nome)
// console.log(cidade)
// console.log(uf) 
//4.2
// function mostraInfo(usuario) {
//     const {nome,idade} = usuario
//     return `${nome} tem ${idade} anos.`;
//    }
// console.log(mostraInfo({ nome: 'Diego', idade: 23 }))

//Exercicio 5
// //5.1
// const arr = [1,2,3,4,5,6,7]
// const [x,...y]=arr
// console.log(x)
// console.log(y)
// //5.2
// function soma (...params){
//     return params.reduce((a,b) => a+b)
// }
// console.log(soma(10,10,10))
//5.2
// const usuario = {
//     nome:'Akram',
//     idade:13,
//     endereco:{
//         cidade:'Guaru',
//         uf:'sp',
//         pais:'Brasil'
//     }
// }
// console.log(usuario)
// const usuario3 = {...usuario,endereco:{...usuario.endereco,cidade:'Ararararacuarara',uf:'RJ'}}
// console.log(usuario3)
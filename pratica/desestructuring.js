const usuario = {
    nome:'Akram',
    idade:29,
    sexo:'M',
    endereco:{
        cidade:'Guaruja',
        uf:'SP'
    }
}
console.log(usuario.nome)
console.log(usuario.endereco.cidade)

//Desestruturando...
const {nome, idade, endereco:{cidade}} = usuario
console.log(nome)
console.log(cidade)

function mostrarDados({nome,idade,endereco:{cidade}}){
    console.log(nome,idade,cidade)
}
mostrarDados(usuario)
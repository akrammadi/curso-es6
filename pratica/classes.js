class Lista {
    constructor(){
        this.nome = []
    }
    adicionar(nome){
        this.nome.push(nome)
        console.log(this.nome)
    }
}

class TodoList extends Lista{
    constructor(){
        super()
        this.usuario='Drogas'
    }
    mostraUsuario(){
        console.log(this.usuario)
    }
}

const MinhaLista = new TodoList()

document.getElementById('incluir').onclick = function() {
    MinhaLista.adicionar('Akram')
}
//MinhaLista.mostraUsuario()

// class Matematica {
//     static soma(a,b){
//         return a+b
//     }
//     static prod(a,b){
//         return a*b
//     }
// }
// console.log(Matematica.soma(2,6))
// console.log(Matematica.prod(5,2))

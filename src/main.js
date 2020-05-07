import api from './api'

class App{
    constructor(){
        this.repositories = []

        this.formElemento = document.getElementById('repo-form')
        this.inputEl = document.getElementById('i32')
        this.listElemento = document.getElementById('repo-list')

        this.manipular()
    }
    manipular(){
        this.formElemento.onsubmit = event => this.adicionar(event)
    }
    setLoading(loading = true){
        if (loading ===true){
            let loadingEl = document.createElement('span')
            loadingEl.appendChild(document.createTextNode('Carregando'))
            loadingEl.setAttribute('id','loading')

            this.formElemento.appendChild(loadingEl)
        }else{
            document.getElementById('loading').remove()
        }
    }
    async adicionar(event){
        event.preventDefault()

        const repoInput = this.inputEl.value
        if (repoInput.length ===0)
            return
        
        this.setLoading()
        try{
            const response = await api.get(`/users/${repoInput}`)

            const {name,bio,html_url,avatar_url} = response.data

            this.repositories.push({
                name,
                bio,
                avatar_url,
                html_url
            })

            this.inputEl.value=''
            
            this.renderizar()
        }catch (err){
            alert('O respositorio nao existe')
        }
        this.setLoading(false)
    }
    renderizar(){
        this.listElemento.innerHTML=''

        this.repositories.forEach(repo =>{
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src',repo.avatar_url)

            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name))
            
            let descriptionEl = document.createElement('p')
            descriptionEl.appendChild(document.createTextNode(repo.bio))

            let linkEl = document.createElement('a')
            linkEl.setAttribute('target','_blank')
            linkEl.setAttribute('href',repo.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'))
            
            let listItemEl = document.createElement('li')
            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEl)
            listItemEl.appendChild(descriptionEl)
            listItemEl.appendChild(linkEl)

            this.listElemento.appendChild(listItemEl)
        })
    }
}
new App()
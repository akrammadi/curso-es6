// só funciona no main.js

const minhaPromise = () => new Promise((resolve,reject) =>{
    setTimeout(()=>{resolve('OK')},2000)
})

// minhaPromise().then(response =>{
//     console.log(response)
// })

// async function executaPromise() {
//     const response = await minhaPromise()
//     console.log(response)
// }

async function executaPromise(){
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}

// const executaPromise = async () =>{
//     console.log(await minhaPromise())
//     console.log(await minhaPromise())
//     console.log(await minhaPromise())
// }
executaPromise()

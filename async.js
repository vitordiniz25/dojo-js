// CALLBACK

// function carregarDados(url, callback){
//     fetch(url)
//         .then(response => response.json())
//         .then(data => callback(data))
//         .catch(error => console.log(error))
// }

// carregarDados('https://jsonplaceholder.typicode.com/posts', function(data) {
//     console.log(data)
// })

// PROMISES

// function carregarDados(url) {
//     return fetch(url)
//             .then(response => {
//                 if(!response.ok){
//                     throw new Error('Erro na requisição')
//                 }
//                 return response.json()
//             })
// }

// carregarDados('https://jsonplaceholder.typicode.com/posts')
//             .then(data => console.log(data))
//             .catch(error => console.error(error))


// ASYNC E AWAIT = mais moderna (EC6)

async function carregarDados(url) {
    try {
        const response = await fetch(url)
        if (!response.ok){
            throw new Error('Erro na requisição')
        }
        const data = await response.json()
        console.log(data)
        console.log('Queijo')
    } catch (error) {
        console.log(error)
    }
}

carregarDados('https://jsonplaceholder.typicode.com/posts')


const getJoke = () =>{
    let endpoint = 'https://geek-jokes.sameerkumar.website/api?format=json';

    let container = document.querySelector('#app');
    
    axios.get(endpoint).then( (response) =>{
    
        container.innerHTML='';
        let p = document.createElement('p')
        p.innerHTML = response.data.joke
        container.appendChild(p)
    
        console.log(response.data)
    } )
}

getJoke();
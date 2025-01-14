api_url="https://zenquotes.io/api/random"

async function getquote(url) {
    
    const response= await fetch(url)
    let data= await response.json()
    console.log(data)
}

getquote(api_url)
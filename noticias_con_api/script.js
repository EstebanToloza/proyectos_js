
const mostrarNoticias = async function(){
    try {
        const response = await fetch("http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-05&sortBy=publishedAt&apiKey=8a08aba822854915a283ed0ff03061d9")
        const datos = await response.json()
        console.log(datos)

    } catch (error) {
    alert("Ups, parece que no hay noticias")
}

//window.onload = mostrarNoticias(
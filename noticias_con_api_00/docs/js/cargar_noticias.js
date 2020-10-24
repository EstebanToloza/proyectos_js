const cargarNoticias = async () => {

    try {

        const url = 'http://newsapi.org/v2/top-headlines?' +
                    'country=ar&' +
                    'category=sports&' +
                    'apiKey=8a08aba822854915a283ed0ff03061d9';

        const respuesta = await fetch ( url )
        const datos = await respuesta.json()

        //debugger
        //console.log ( datos )

        const noticias = datos.articles.map ( item => {

            const articulo = document.querySelector( '.noticia' ).cloneNode( true )
    
            articulo.classList.remove( 'no-display' )
            articulo.classList.add( 'show' )

            articulo.querySelector( '.noticia-img' ).querySelector( 'img' ).src = item.urlToImage
            articulo.querySelector( '.noticia-txt' ).querySelector( 'h3' ).innerText = item.title
            articulo.querySelector( '.noticia-txt' ).querySelector( 'p' ).innerText = 'por ' + item.author
            const bajada = articulo.querySelector( '.noticia-txt' ).querySelector( 'p' ).nextElementSibling
            bajada.innerText = item.description

            document.querySelector( '#ultimas-noticias' ).appendChild( articulo )

            //return articulo
        })

        //document.querySelector( '#ultimas-noticias' ).appendChild( noticias )
    }
    catch ( error ) {
        
        alert ( 'Ups! No pude cargar las noticias.' )
    }

}

window.onload = cargarNoticias
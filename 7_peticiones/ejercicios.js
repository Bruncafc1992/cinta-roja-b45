
const request = require('request');

// 1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.
//                     https://pokeapi.co/

let obtenerPokemon = (id) =>{

    const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';

    request(`${URL_BASE}${id}`, (error, resp, body)=>{

        if(resp.statusCode === 200){
            
            const infoPokemon = JSON.parse(body);

            const tiposPokemon = infoPokemon.types;  

            const nombresTipos = tiposPokemon.map(tipos => tipos.type.name);

            // console.log(nombresTipos);

            console.log(`Su nombre es: ${infoPokemon.forms[0].name} y su tipo es: ${nombresTipos}`);

        } else {

            console.log('Error, status code: ', resp.statusCode);
        }


    })
}

// obtenerPokemon(1);

// 2.- Hacer una funcion que haga una petición 
//     (Ejemplo: peticionLibro("i robot");
//     Buscar un libro y traer el o los autores del primer libro
//     http://openlibrary.org/search.json?q=i+robot) 

let obtenerAutoresLibro = (id) => {

    const URL_BASE = 'http://openlibrary.org/search.json?q=';

    request(`${URL_BASE}${id}`, (error, resp, body)=>{

        if(resp.statusCode === 200){

            const libros = JSON.parse(body);

            let docsLibros = libros.docs;

            // console.log(docsLibros);

            let autores = docsLibros[0].author_name ;

            // let autores = docsLibros.map(autor =>autor.author_name);

            console.log(autores);
        
        } else {

            console.log('Error, status code: ', resp.statusCode);
        }


    })
}

// obtenerAutoresLibro("Stellaluna");



// 3.- Hacer una petición por autor y devolver la lista de 
//     sus libros
//          

let librosDeAutores = (id) => {

    const URL_BASE = 'http://openlibrary.org/search.json?author=';

    request(`${URL_BASE}${id}`, (error, resp, body)=>{

        if(resp.statusCode === 200){

            const arregloLibros = JSON.parse(body);

            let arregloDocs = arregloLibros.docs;

            let autores = arregloDocs.map(x=> {
            
            return x.title;
            
            })

            console.log(autores);

        } else {

            console.log('Error, status code: ', resp.statusCode);
        }
    })
}

// librosDeAutores("marquez");

// 4.- Hacer una petición y devolver el género de la banda deseada
//     http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse

let generoMusica = (id) => {

    const URL_BASE = 'http://www.theaudiodb.com/api/v1/json/1/search.php?s=';

    request(`${URL_BASE}${id}`, (error, respuesta, body) =>{

        const resultados = JSON.parse(body);

        console.log(resultados.artists[0].strStyle);
    })
}

generoMusica("ub40");


// 5.- Hacer una petición a la swapi a un personaje y obtener 
//     su primera película
//
//                     https://swapi.co/


// 6.- Hacer una petición a la swapi a un personaje y obtener 
//     sus primera películas
//
//                     https://swapi.co/


// 7.- Hacer una petición a la swapi a una película y obtener 
//     sus personajes
//
//                     https://swapi.co/

// 8.- Hacer una petición a la swapi a un planeta y obtener 
//     los nombres de los habitantes
//
//                     http://swapi.dev/api/planets/1/

// 9.- Hacer una petición a la pokeapi a un pokemon y obtener 
//     sus habilidades
//
//                     https://pokeapi.co/api/v2/pokemon/1

// 10.- Hacer una petición a la pokeapi a un pokemon y obtener 
//     el área en donde lo encuentras
//
//                     https://pokeapi.co/api/v2/pokemon/1


// 11.- Devolver los asteroides que sean potencialmente peligrosos
//     para la tierra de la semana pasada hasta el día de ayer.
//                     https://api.nasa.gov/


// 12.- Traer los primeros 151 pokemon de la primera generacion y 
//     devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño 
//     y peso.
//                       https://pokeapi.co/


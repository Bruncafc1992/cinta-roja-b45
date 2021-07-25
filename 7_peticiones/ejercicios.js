
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

// generoMusica("ub40");


// 5.- Hacer una petición a la swapi a un personaje y obtener 
//     su primera película
//
//                     https://swapi.co/

let peliculaPersonaje = (id) => {

    const URL_BASE = 'https://swapi.dev/api/people/';

    request(`${URL_BASE}${id}`, (error, respuesta, body) => {

        let personajeInfo = JSON.parse(body);

        request(personajeInfo.films[0], (error, respuesta, body) =>{

        let peliculas = JSON.parse(body);

        console.log("La primer película de", personajeInfo.name, "es:", peliculas.title);

           
        }

        );
})
}

// peliculaPersonaje(25);

// 6.- Hacer una petición a la swapi a un personaje y obtener 
//     sus primera películas
//
//                     https://swapi.co/


let primerasPeliculasPersonajes = (id) => {

    const URL_BASE = 'https://swapi.dev/api/people/';

    request(`${URL_BASE}${id}`, (error, respuesta, body) => {

        let personajeInfo = JSON.parse(body);

        let peliculas = personajeInfo.films.map((x, y) => {
            
            request(x, (error, respuesta, body) =>{

                let nombresPeliculas = JSON.parse(body);
        
                console.log(personajeInfo.name,y+1, 'Película: ',nombresPeliculas.title);
            
            });  
        }

        );
})
}

// primerasPeliculasPersonajes(1);

// 7.- Hacer una petición a la swapi a una película y obtener 
//     sus personajes
//
//                     https://swapi.co/


let traerPersonajesPelicula = (idPelicula) =>{

    const URL_BASE = 'https://swapi.dev/api/films/';

    request(`${URL_BASE}${idPelicula}`, (error, respuesta, body) =>{

        if (respuesta.statusCode === 200){ 

        let personajes = JSON.parse(body);

        let listaPersonajes = personajes.characters.map((x, y)=>{

            request(x, (error, respuesta, body)=>{

                let nombresPersonaje= JSON.parse(body);

                console.log(nombresPersonaje.name);
            })
        })

    } else {

        console.log('Error, status code:', respuesta.statusCode);

    }
    
    })
}

// traerPersonajesPelicula(6);

// 8.- Hacer una petición a la swapi a un planeta y obtener 
//     los nombres de los habitantes
//
//                     http://swapi.dev/api/planets/1/

let traerNombresPlaneta = (idPlaneta) =>{

    const URL_BASE ='http://swapi.dev/api/planets/';

    request(`${URL_BASE}${idPlaneta}`, (error, respuesta, body) => {

        if(respuesta.statusCode === 200){

            let infoPlaneta = JSON.parse(body);

            console.log('Nombre del planeta:',infoPlaneta.name);

            let nombresResidentes = infoPlaneta.residents.map((x, y)=> {

                request(x, (error, respuesta, body) => {

                    let resultados = JSON.parse(body);

                    console.log(y,resultados.name);
                })
            })


        } else {

            console.log('Error, status code:', respuesta.statusCode);
        }
    })

}

// traerNombresPlaneta(1);

// 9.- Hacer una petición a la pokeapi a un pokemon y obtener 
//     sus habilidades
//
//                     https://pokeapi.co/api/v2/pokemon/1

let habilidadesPokemon = (idPokemon) =>{

    const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';

    request(`${URL_BASE}${idPokemon}`, (error, respuesta, body) =>{

        if(respuesta.statusCode === 200){

            let infoPokemon = JSON.parse(body);

            let habilidades = infoPokemon.abilities.map(x=>{

               return x.ability.name;
            })

            console.log(infoPokemon.forms[0].name, habilidades);

        } else {

            console.log('Error, status code: ', respuesta.statusCode);
        }

    })

}

// habilidadesPokemon('pikachu');



// 10.- Hacer una petición a la pokeapi a un pokemon y obtener 
//     el área en donde lo encuentras
//
//                     https://pokeapi.co/api/v2/pokemon/1

let obtenerAreaPokemon = (idPokemon) => {

    const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';

    request(`${URL_BASE}${idPokemon}`, (error, respuesta, body) => { 

        if (respuesta.statusCode === 200){
            
            let infoPokemon = JSON.parse(body);

            request(infoPokemon.location_area_encounters, (error, respuesta, body) =>{

                let resultados2 = JSON.parse(body);

                let nombresAreas = resultados2.map(x => {

                return x.location_area.name;

                });

                console.log(nombresAreas);


            })

            
        } else {

            console.log('Error, status code', respuesta.statusCode);
        }

    })
}

obtenerAreaPokemon('pikachu');

// 11.- Devolver los asteroides que sean potencialmente peligrosos
//     para la tierra de la semana pasada hasta el día de ayer.
//                     https://api.nasa.gov/


// 12.- Traer los primeros 151 pokemon de la primera generacion y 
//     devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño 
//     y peso.
//                       https://pokeapi.co/
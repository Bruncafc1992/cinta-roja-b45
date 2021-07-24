const request = require('request');


let obtenerPersonaje = (id) =>{

    request(`https://swapi.dev/api/people/${id}`, (error, respuesta, body)=>{

    if(respuesta.statusCode === 200) {


        
        let bodyJSON = JSON.parse(body);
        
        console.log(bodyJSON.name);
        console.log(bodyJSON.mass);
    } else{

        console.log( 'Error, status code: ',respuesta.statusCode);
    }

});

}

obtenerPersonaje(84 );


let obtenerPersonajes = ( ) => {
    request('https://swapi.dev/api/people/', (error, respuesta, body)=>{


        if(respuesta.statusCode === 200){


            let personajes = JSON.parse(body);
            
            let resultados = personajes.results;
            
            let nombres = resultados.map( personaje =>  personaje.name);
            
            // console.log(nombres);
            
            let infoAltura = resultados.map(personaje =>{
                
                return {Nombre: personaje.name, Altura: personaje.height };
                
            })
            
            console.log(infoAltura);
            
            let losMasAltos = infoAltura.filter(x => {return x.Altura <= 160;})
            
            console.log(losMasAltos);
        } else {

            console.log(respuesta.statusCode);
        }
    
    
    })};


obtenerPersonajes();
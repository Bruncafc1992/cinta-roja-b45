// Crear una clase Cine que tenga 3 atributos y el método reproducir como mínimo. :)
// El método reproducir puede diferenciar entre un objeto tipo Película o un objeto tipo Documental.
// Crear una clase Largometraje (elige atributos y métodos que sean apropiados)
// Crea las subclases Pelicula y Documental que extiendan de Largometraje.
// Añade los atributos y métodos adicionales que sean necesarios.
// *Cada clase debe estar en un archivo por separado.
// *Investiga como exportar clases de un archivo para importarlas en otro y poder usarlas.
// Crea instancias de Película, Documental y Cine como mínimo. 

// linea de código para importar varios archivos a otro archivo

const Largometraje = require('./Largometraje');
const Pelicula = require('./Pelicula');
const Documental = require('./Documental');

class Cine {
    constructor(nombre, noSalas, lugar ){
        this.nombre = nombre;
        this.noSalas = noSalas;
        this.lugar = lugar;
    };

    reproducir(largometraje){

        if (largometraje.duracion > 60){
            console.log(`Estamos reproduciendo la película: ${largometraje.titulo}`);
        } 
        else {
            console.log(`Estamos reproduciendo un documental: ${largometraje.titulo}`);
        }

    };
};


let peli1 = new Pelicula('Club de la pelea', 139, "David Fincher", ['Brad Pitt', 'Edward Norton'], 'USA', 'Drama', false);
let doc1 = new Documental('Perros de la calle', 55, 'José Barrios', 'Bruno como lobo', 'CR', 'Perros abandonados');
let cine1 = new Cine('Cinemax', 17, 'Tangamandapio');


//IMPORTO O PONGO DISPONIBLE UN ARCHIVO PARA QUE OTRO PUEDA ACCEDER
module.exports = {
    cine1,
    peli1,
    doc1,
    Cine,
    Pelicula,
    Documental,
};





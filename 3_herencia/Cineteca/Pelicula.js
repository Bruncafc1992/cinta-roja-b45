const Largometraje = require("./Largometraje");

class Pelicula extends Largometraje {
    constructor(titulo, duracion, director, actores, origen, genero, esReal){
        super(titulo, duracion, director, actores, origen);
        this.genero = genero;
        this.esReal = esReal;
    };
};


//IMPORTO O PONGO DISPONIBLE UN ARCHIVO PARA QUE OTRO PUEDA ACCEDER
module.exports = Pelicula;
// IMPORTO UNA CLASE DE UN ARCHIVO

const Largometraje = require('./Largometraje');

class Documental extends Largometraje{
    constructor(titulo, duracion, director, actores, origen, tematica) {
        super(titulo, duracion, director, actores, origen);
        this.tematica = tematica;
        
    }

}

//IMPORTO O PONGO DISPONIBLE UN ARCHIVO PARA QUE OTRO PUEDA ACCEDER
module.exports = Documental;
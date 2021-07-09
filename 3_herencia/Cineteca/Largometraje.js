
class Largometraje {
    constructor(titulo, duracion, director, actores, origen) { 
        this.titulo = titulo;
        this.duracion = duracion;
        this.director = director;
        this.actores = actores;
        this.origen = origen;
    };

    producir(){

        console.log('Estamos produciendo');
    }
};

//IMPORTO O PONGO DISPONIBLE UN ARCHIVO PARA QUE OTRO PUEDA ACCEDER
module.exports = Largometraje;
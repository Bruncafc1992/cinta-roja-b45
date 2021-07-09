
// comando para solicitar varios elementos de un archivo

const {cine1, peli1, doc1, Cine, Documental, Pelicula} = require('./Cine');

console.log(cine1);
console.log(peli1);
console.log(doc1);

//Destructurar objetos -> SACAR DE UN OBJETO SUS VALORES Y GUARDARLOS EN VARIABLES

let persona = {
    nombre: 'José',
    edad: '29',
};

const {nombre, edad} = persona;

console.log(nombre);
console.log(edad);
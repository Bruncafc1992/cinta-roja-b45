class Animal {

    constructor(nombre, ojos, estaVivo, cantidadPatas, edad){
        this.nombre = nombre;
        this.ojos = ojos;
        this.estaVivo = estaVivo;
        this.cantidadPatas = cantidadPatas;
        this.edad = edad;
    };

    comunicar() {
        console.log('Me estoy comunicando');
    };

    respirar() {
        console.log('Estoy respirando');
    };
};

let tortuga = new Animal('Tortuga', 2, true, 4, 6);
console.log(tortuga);

// Herencia es hacer una subclase de una superclase
// Se utiliza la palabra reservada (extends)...

class Humano extends Animal {
    constructor(nombre, ojos, estaVivo, cantidadPatas, edad, trabajo, numCelular ){
        super(nombre, ojos, estaVivo, cantidadPatas, edad);
        this.trabajo =  trabajo;
        this.numCelular = numCelular;
    };

    trabajar(){
        console.log('Soy un godinez');
    };

    viajar(){
        console.log('Viajar wuuu!!');
    };
};

let Antonella = new Humano('Antonella', 2, true, 2, 28, true, 44439);

console.log(Antonella);

Antonella.trabajar();

Antonella.viajar();

Antonella.respirar();
 
Antonella.comunicar();
// Clases (MOLDES)

// Creamos una clase o un molde

//Clase de ejemplo Usuario

class Usuario {

    // Metodo constructor es el inicializador
    constructor(nombre, edad){

        this.nombre = nombre;
        this.edad = edad;
    }
};

//crear objetos con ayuda de una clase o molde instancia

let usuario1 = new Usuario ('José', 29);
let usuario2 = new Usuario ('Pedro', 24);

// console.log(usuario1.nombre);

// console.log(usuario2.edad);


// Clase de ejemplo BANCO

class Banco {



    constructor(nombre, cantidadDeUsuarios, ubicacion, telefono, numEmpleados){

        this.nombre = nombre;
        this.cantidadDeUsuarios = cantidadDeUsuarios;
        this.ubicacion = ubicacion;
        this.telefono = telefono;
        this.numEmpleados = numEmpleados;
 };

 darPrestamos(){
     console.log('me debes!!');
 };

 cobrar(){
     console.log('Págame');
 };

 contratarEmpleados(nuevosEmpleados){
     this.numEmpleados += nuevosEmpleados;
 }
};


// Crear instancia 1
let BBVA = new Banco('BBVA', 1000, 'México', 2222222, 100000);
BBVA.contratarEmpleados(150);
 console.log(BBVA);

 //Crear instancia2
let Santander = new Banco('Santander', 10, 'USA', 5555, 2);
Santander.contratarEmpleados(1000);
console.log(Santander);

class Bebida {
    constructor(nombre, ingredientes){

        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = 100;
    };

    beber(){
        console.log('glup glup');
    };
};

let margarita = new Bebida("Margarita", ['Limon', 'Sal', 'Tequila'], 100111);

console.log(margarita);

margarita.precio = 375;
console.log(margarita);

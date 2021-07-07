  
// 1.- Haz una clase llamada Persona que siga las siguientes condiciones:
// 	 Sus atributos son: nombre, edad, RFC, género, peso y altura.
// 	 calcularIMC()
// 	 esMayorDeEdad()
// 	 El constructor pide nombre, edad,género,peso y altura
//      Generar el RFC a partir de el nombre, apellido, fechaNacimiento y sexo
// RFC - > PRIMER LETRA DE TU NOMBRE + PRIMER LETRA DE TU APELLIDO + AÑO NACIMIENTO + MES + DÍA + PRIMER LETRA DE TU GÉNERO

class Persona {

    constructor(nombre, edad, genero, peso, altura){

        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.peso = peso;
        this.altura = altura;
        this.RFC = nombre + edad + genero;
    };

    calcularIMC(){
        let IMC = this.peso / (this.altura**2)
        console.log('El índice de masa corporal de',this.nombre, 'es:',IMC);
        return IMC;
    };

    esMayorDeEdad(){
        if(this.edad>=18){
            console.log('Es mayor de 18 años y su edad es:', this.edad);
        } else{
            console.log('Es menor de edad...')
        }
    }
};

/* let Persona1 = new Persona('José', 29, 'M', 93, 1.81);
console.log(Persona1);
Persona1.calcularIMC();
Persona1.esMayorDeEdad(); */


// 2.- Crear una clase Cuenta que tenga los siguientes atributos y métodos:
// 	 -Titular y cantidad
// 	 -ingresar(cantidad)
// 	 -retirar(cantidad)
// 	 Hacer las validaciones previas
// 	 Como regla de negocio no debe de tener más de $900 y menos de $10

class Cuenta{
    constructor(titular, cantidad){
        this.titular = titular;
        this.cantidad = cantidad;

        
    };

    if(this.cantidad > 900){
        console.log('Se alcanzo el limite de $900 MXN, permitidos por el banco');

    } else {
        
    };

    ingresar(ingreso){
        this.cantidad+=ingreso;
        console.log('Saldo en cuenta:', this.cantidad);
    
    };

    retirar(retiro){
        this.cantidad-= retiro;
    };
};

let Cuenta1 = new Cuenta('Hiromi', 175);

console.log(Cuenta1);

Cuenta1.ingresar(800);

console.log(Cuenta1);

/* Cuenta1.retirar(476);

console.log(Cuenta1);

let cuenta2 = new Cuenta('José', 100);

console.log(cuenta2); */




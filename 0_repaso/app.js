//REPASO JAVASCRIPT

//ENVIAR MENSAJES A LA CONSOLA

/* console.log("Soy un mensaje")

console.warn("Soy otro mensaje")
 */
//DECLARAR UNA VARIABLE

// PALABRA RESERVADA (var, let y const) + nombre de la variable

var numero;

//ASIGNAR UN VALOR A UNA VARIABLE

numero = 10;

//DECLARAR Y ASIGNAR

var nombre = "José Andrés";

// CAMELCASE

var nombreUsuario = "Ricardo";

var numeroTelefonico = 3531064499;

//DIFERENCIA ENTRE VAR, LET, CONST
//SCOPE
//VAR --> GLOBAL
//LET --> LOCAL
//CONST --> LOCAL Y CONSTANTE (NO CAMBIAR DE VALOR)


// PUEDO RESIGNAR
var num = 10;
num = 100;
num = 1;

// PUEDO RESIGNAR
let num2 = 100;
num2 = 25;
num2 = 34;

// NO PUEDO RESIGNAR
const num3 = 333;

var num5 = 10000;

{

   /*  console.log(num5) */
}


let num6 = 3;

{
   /*  console.log(num6) */
}

{

    // VARES UNA VARIABLE GLOBAL (funciona en todo el documento)
    var num7 = 360;
}
/* console.log(num7) */

{
    // LET ES UNA VARIABLE LOCAL (solo funciona en el espacio donde es declarada)
    let num8= 720;
}
/* //console.log(num7) */

//Tipos de datos

//Números

let numZ = 10;
let num12 = 12200;

//String

let nombreAlumno = "José";
let nombreGato = "Francella"

//Booleanos

let numEsMayor = false;
let numEsMenor = true;

/* console.log("Soy un console.log"); 
 */
//Arreglos

let listaUno = [1, 10, 100, 1000, 10000];
let listaDos= [];
let nombres = ["Juliana", "José", "Peter"];

/* console.log(nombres[2]);

console.log(listaUno[3]);
 */
//Objetos

let porteroEspañolUno = {

    nombre: 'Iker',
    edad: 40,
    apellido: 'Casillas',
    estado: "Retirado",
    equipo: "Real Madrid"
};
/* console.log(porteroEspañolUno);
console.log("Nombre del jugador: " + porteroEspañolUno.nombre);
console.log("Equipo: " + porteroEspañolUno.equipo);
 */
//CONDICIONALES -> Decisiones

//if - else
//if - else if - else
// do while
// switch

// Preguntas
// > mayor que
// < menor que
// <= menor o igual que
// >= mayor o igual que
// == igual que
// != diferentes
// && - and
// || - or

// IF ELSE sencillo

let alumnoEdad = 19;

if (alumnoEdad>=18){
    /* console.log("Si, es mayor. Su edad es: " + alumnoEdad); */
}else {

   /*  console.log("Es menor de edad."); */
}

// IF ELSE IF... ELSE

let precioBoleto = 50;

if (precioBoleto < 100){

   /*  console.log ("Boleto Blanco"); */

} else if (precioBoleto < 200){

    /* console.log ("Boleto Verde"); */

} else {

/*     console.log("Boleto Negro") */
}

//Compara el valor 

/* console.log(10 == '10'); */

//Compara el valor y tipo ESTRICTA

/* console.log(10 === '10'); */

//CICLO 

// for (valor inicial, tope, incremento){}
 
for(let iterador = 0 ; iterador <= 100 ; iterador +=10){

/* console.log('Alumno No. ', iterador);
 */}

let nombresAlumnos = ['José', 'Julio', 'Antonella', 'Anderson', 'Carmen', 'Andrés'];

for (let i = 0; i <= 5; i++){

    /* console.log(nombresAlumnos[i]); */
}


//Funciones

//Creación de una función 

function saludar () {
    alert('B I E N V E N I D O S');
}

//Funciones con valor de retorno

function obtenerNombreCompleto() {

    let nombre = 'Diego';
    let apellido = 'Rojas';
    let nombreCompleto = nombre + ' ' + apellido;
    return nombreCompleto;
}

//console.log(obtenerNombreCompleto());

function sumar () {

    let a = 100;
    let b = 100;
    let resultado = a + b;
    console.log(resultado);
}




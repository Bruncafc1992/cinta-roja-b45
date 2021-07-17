//FUNCIONES

//JS VANILLA

//Declarando una función
function mostrarMensaje(){
    console.log('Un mensaje'); 
}

let saludar = function (){
    console.log('Holaaaa')
}

function saludasUsuario(nombre){

    console.log(`Hola ${nombre}`);
}

function sumar(num1,num2){

    return num1 + num2;
}

function convAFarenheit(centigrados){

    let resultado = (centigrados * 9/5) + 32;
    return resultado;
}


//2- Hacer una función que muestre la tabla de multiplicar de un número

let tablaDeMultiplicar = (numero)=>{
    for(let i=0; i<12;i++){

        let tabla= numero*i;
        console.log(`${numero}x${i}=${tabla}`)
        }

}

// tablaDeMultiplicar(19);

// 5. - Leer el nombre y sueldo de 8 empleados y mostrar el nombre y sueldo del empleado
//  que más gana (Ojo, puedes hacer el ejercicio leyendo los nombres y sueldos desde prompt  
// o escribiendo un arreglo que contenga los nombres y sueldos de cada empleado. Es tu decisión 
//diseñar cómo organizar los datos para hacer las comparaciones necesarias para determinar 
// quién es el empleado con mayor sueldo)

let info = [
    {nombre: 'Marco',sueldo: 1000},
    {nombre: 'José',sueldo: 1700},
    {nombre: 'Ana',sueldo: 2000},
    {nombre: 'Raul',sueldo: 1500},
    {nombre: 'Julio',sueldo: 1400},
    {nombre: 'Juan',sueldo: 10050},
    {nombre: 'Mario',sueldo: 1100},
    {nombre: 'María',sueldo: 1200},
]

// for( let x = 0; x < info.length; x ++ ){
  
//     console.log( `Nombre del empleado: ${info[x].nombre} y su sueldo es: ${info[x].sueldo}`);

// };


function quienGanaMas(arregloDeEmpleados){
    
    let ganador = '';
    let sueldoMayor = 0;

    for(let i = 0; i < arregloDeEmpleados.length; i++){

        if(arregloDeEmpleados[i].sueldo > sueldoMayor){

            ganador = arregloDeEmpleados[i].nombre;
            sueldoMayor = arregloDeEmpleados[i].sueldo;

        }

            ganador = ganador;
      

    };

    return `El que gana más dinero es ${ganador}: ${sueldoMayor}`;  

};

// console.log(quienGanaMas(info));

 
//6.- Guardar en un array los 20 primeros números pares


let arreglo20 = ()=>{

    let arreglo=[];

    for(let i = 1; i <= 40; i++){
      
        if(i%2==0){
            arreglo.push(i);
        }
     };

     return arreglo;
}

// console.log(arreglo20());

//10.- Escribe una función que halle el máximo entre dos números 

let numMayor2  = (x,y) => {
    
    if(x>y){
        console.log("El número mayor es:", x);

    } else {
        console.log("El número mayor es:", y);

    }
}

// numMayor2(5,6);

//11.- Escribe una función que halle el máximo entre tres números


let numMayor3  = (x,y,z) => {
    
    if(x>y && x>z){
        console.log("El número mayor es:", x);

    } else if(y>x && y>z){
        
        console.log("El número mayor es:", y);
    
    } else{
        console.log("El número mayor es:", z)

    }
}

// numMayor3(7,3,2);
//12.- Escribe una función que devuelva si un número es negativo, positivo o cero

let posNegCero  = (x) => {
    
    if(x>0){
        console.log("El número es positivo");

    } else if(x<0){
        
        console.log("El número es negativo");
    
    } else{
        console.log("El número es cero")

    }
};

// posNegCero("1");

//Mandar a llamar una función
// a través de su nombre y con paréntesis
 
// mostrarMensaje();
// saludar();
// saludasUsuario('José Andrés');
// console.log (sumar(2,3));
// console.log(convAFarenheit(100));

//JS ECMA 6

//Son anónimas 

let mostrarMensaje2 = ()=>{

    console.log('Soy un mensaje')
}

// mostrarMensaje2();

let saludar2 = ()=>{

    console.log('Soy una función flecha...')
};

// saludar2();

let saludarUsuario = (nombre2)=>{

    console.log(`Hola ${nombre2}`)
};

// saludarUsuario('José');

let sumar2 = (n1, n2)=>{

    return n1 + n2;

}

// console.log(sumar(300,22));

let convAF = (cent)=>{

    let resultado = (cent * 9/5) + 32;
    return resultado;

}

// console.log(convAF(32));
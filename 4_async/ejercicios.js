
// 1.- Crear una función de orden superior que reciba como
//     argumento una variable de cualquier tipo y un callback. 
// La función de orden superior debe retornar como resultado, 
// mediante el callback, cual es el tipo de dato de la variable ingresada e 
// imprimir su contenido.

let tipoDeDato = (variable, func1)=>{

   func1(variable);
};

let callback = (variable)=>{

    console.log("Datos ingresados: ", variable, " y tipo de dato es:", typeof variable);
}

// tipoDeDato("Carro",callback);



// 2.- Crear una función de orden superior que reciba como 
//     argumentos dos números y un callback. Según el callback
//     que se pase a la función, se devuelve la suma de los
//     dos números, la resta de los dos números o la
//     multiplicación de los dos números.

let op2 = (num1,num2,funcion) => { 

    return funcion (num1, num2);
};

let sumar = (num1, num2) => {

    console.log("Resultado de la suma:", num1 + num2);
};

let restar = (num1, num2) => {

    console.log("Resultado de la resta:", num1 - num2);
};

let multi = (num1, num2) => {

    console.log("Resultado de la multiplicación:", num1 * num2);
};

// op2(3, 4, sumar);
// op2(3, 4, restar);
// op2(3, 4, multi);


// 3.- Escribe una función de orden superior que reciba una cadena de
//     caracteres y debe devolver, mediante un callback, la
//     cadena de caracteres en mayúsculas o en minúsculas.
//             ordenSuperior("PejeLagarto", minus);
//             -> pejelagarto
//             ordenSuperior("PejeLagarto", mayus);
//             -> PEJELARTO

let minMay = (variable, callback)=>{
    
    callback(variable);

};

let minus = (variable)=>{

    console.log(variable.toLowerCase());
}

// minMay('CArrTTsdFSFSSSES',minus);

let mayus = (variable)=>{

    console.log(variable.toUpperCase());
}

// minMay('CArrTTsdFSFSSSES',mayus);


// 4.- Hacer un arreglo de 4 cantidades de tiempo (en minutos)
//     EJEMPLO c y tomar solo las cantidades
//     mayores a dos horas (hacer la comparación en horas) 
//     mediante un callback.




let arreglo = [120,160,130,90];

let resumen = arreglo.filter((x)=>{

    return x > 120;

});

console.log(resumen);








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

//Mandar a llamar una función
// a través de su nombre y con paréntesis
 
// mostrarMensaje();
// saludar();
// saludasUsuario('José Andrés');
// console.log (sumar(2,3));
console.log(convAFarenheit(100));

//JS ECMA 6
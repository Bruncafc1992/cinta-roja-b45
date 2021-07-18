// CALLBACK --> ES UNA FUNCION QUE SE PASA COMO ARGUMENTO DE OTRA FUNCIÓN

//FUNCION INICIAL
let mostrarUnMensaje = (funcion)=>{
    funcion()
};

//FUNCION CALLBACK 
let yoSoyUnCallback = () =>{

    console.log('Yo soy un callback');
}

//MANDAR LLAMAR LA FUNCION INICIAL
// mostrarUnMensaje(yoSoyUnCallback);


// FUNCION INICIAL 2
 let saludarUsuario = (nombreUsuario, funcion) =>{

    funcion(nombreUsuario);
 };

 //FUNCION CALLBACK 2

 let callback = (nombreUsuario) =>{

    console.log(`Bienvenido, ${nombreUsuario}`)
 }

 saludarUsuario('José',callback);

 //Función inicial 3

 let registrarUsuario = (nombre, edad, funcion)=>{

    funcion (nombre, edad);
 };

 //Función callback 3

 let registroExitoso = (nombre, edad)=>{

    console.log(`Registro Exitoso!!... Su nombre es: ${nombre} y su edad es: ${edad}`);
 }

 registrarUsuario('José', 29, registroExitoso);
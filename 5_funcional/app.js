let info = [
    {
        nombre: 'Marco', 
        sueldo: 1000
    }, 
    {
        nombre: 'Diana', 
        sueldo: 40000
    }, 
    {
        nombre: 'Ana', 
        sueldo: 6000000
    }, 
    {
        nombre: 'Daniel', 
        sueldo: 10000
    }
];

// info.forEach((x)=>{ console.log(`Nombre del cliente ${x.nombre} y su sueldo es: ${x.sueldo}`);});

let nombres = ['Bernardo', 'Juan Antonio', 'Alexander', 'Antonella', 'Junior', 'Stefanny', 'José Andrés'];

// nombres.forEach((x,y)=>{console.log(y+1,x, x.length);})

//MAP 
//iterar arreglos
//crear arreglos nuevos con el retorno del map

//CONSTRUIR UN ARREGLO BASADO EN UN ARREGLO BASE
// let a = ['22 - 0', '15 - 1', '10 -2', '12 -3', '8 - 4'];
let array = [22, 15, 10, 12, 8];

let nuevoArreglo = array.map((x,y)=>{

   return `${x} - ${y}`;
})


// console.log(nuevoArreglo);


//FILTER
//nos ayuda a crear un arreglo nuevo que cumpla 
//con la condición que pongamos en el return

let edadesAlumnos = [20, 21, 30, 10, 15, 8, 30, 1, 20, 30];

let mayores = edadesAlumnos.filter(x=>{

        return x = 30;
})


console.log(edadesAlumnos);
console.log(mayores);

let animales = ['koala', 'gato', 'araña', 'perro', 'culebra'];

let animalesLength = animales.filter(x =>{

    return x.length <= 5;
})


console.log(animalesLength);
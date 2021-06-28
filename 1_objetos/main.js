let persona1 = {

    nombre : 'Diana',
    apellido : 'Barrios',
    edad : 22,
    nacionalidad: 'CR'
};

console.log(persona1); 
console.log(persona1.edad);
console.log(persona1.nombre);

let perrito = {

    //Estos son atributos...

    nombre: 'Rex',
    color: 'Café',
    patas: 4,
    raza: "Pastor Alemán",
    género: "M",

    //Estos son métodos

    ladrar(){

        console.log('guau guau');
    },
    
    caminar(){

        console.log('Estoy caminando...')


    },

    rodar (){

        console.log ("rodando")
    }
}

console.log(perrito);
console.log(perrito.nombre)

perrito.rodar();
perrito.ladrar  ();


let carro = {

    motor: 'V8',
    marca: 'Audi',
    modelo: 'R8',
    año: '2022',
    color: 'Rojo',

    arrancar(){

        console.log("Ruuuum ruuuum")
    },

    girarDerecha(){

        console.log('----->')
    },

    girarIzquierda(){

        console.log('<-----')
    },

    pintarCarro(colorNuevo){

        this.color = colorNuevo;
    }
}

carro.arrancar();
console.log(carro.color);
carro.pintarCarro("Negro");
console.log(carro);
carro.reversa = 'tuuu tuuu tuuu';
console.log(carro);

const request = require('request');

request('https://swapi.dev/api/people/4/', (error, respuesta, body)=>{

    let bodyJSON = JSON.parse(body);

    console.log(bodyJSON.mass);
    console.log(bodyJSON.name);

    console.log(error);

    console.log(respuesta);
});
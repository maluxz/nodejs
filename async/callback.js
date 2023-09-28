function hola(nombre, miCallback) {
    setTimeout(function(){
        console.log('Funcion asincrona saluda');
        console.log('Hola ' + nombre)
        miCallback(nombre);
    }, 1500);
}

function adios(nombre, otroCallback) {
    setTimeout(function(){
        console.log('Funcion asincrona despide');
        console.log('Adios ' + nombre)
        otroCallback();
    }, 1000);
}

console.log('Inicio Proceso');

hola('Mario', function(nombre){
    adios(nombre, function(){
        console.log('Fin Proceso');
    });
});

// hola('Mario', function () {});
// adios('Mario', function () {});
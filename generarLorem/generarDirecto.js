const fs = require('fs');

// Función para generar palabras Lorem Ipsum aleatorias
function generarPalabrasLoremIpsum(cantidadPalabras) {
    const palabrasLoremIpsum = [
        'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
        'Sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua',
        'Ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris',
        'nisi', 'ut', 'aliquip', 'ex', 'ea', 'commodo', 'consequat',
        'Duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'in', 'voluptate', 'velit', 'esse', 'cillum',
        'dolore', 'eu', 'fugiat', 'nulla', 'pariatur',
        'Excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'in', 'culpa', 'qui', 'officia',
        'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum',
      ];

  const palabrasAleatorias = [];
  for (let i = 0; i < cantidadPalabras; i++) {
    const indiceAleatorio = Math.floor(Math.random() * palabrasLoremIpsum.length);
    palabrasAleatorias.push(palabrasLoremIpsum[indiceAleatorio]);
  }

  return palabrasAleatorias.join(' ');
}

// Función para generar un párrafo Lorem Ipsum con palabras aleatorias
function generarParrafoLoremIpsum(cantidadPalabras) {
  return generarPalabrasLoremIpsum(cantidadPalabras) + '\n';
}

// Función para generar y escribir párrafos Lorem Ipsum en el archivo
function generarYGuardarParrafos(cantidadParrafos, nombreArchivo) {
  const writeStream = fs.createWriteStream(nombreArchivo);

  for (let i = 0; i < cantidadParrafos; i++) {
    const cantidadPalabras = Math.floor(Math.random() * 50) + 10; // Entre 10 y 59 palabras por párrafo
    const parrafo = generarParrafoLoremIpsum(cantidadPalabras);
    writeStream.write(parrafo, 'utf8');
  }

  writeStream.end(() => {
    console.log(`Se ha generado un archivo "${nombreArchivo}" con ${cantidadParrafos} párrafos de Lorem Ipsum.`);
  });

  writeStream.on('error', (err) => {
    console.error('Error al escribir en el archivo:', err);
  });
}

const cantidadParrafosLoremIpsum = 612469; // Cambia este valor al número de párrafos que desees
const nombreArchivo = 'Lorem128.txt';

generarYGuardarParrafos(cantidadParrafosLoremIpsum, nombreArchivo);

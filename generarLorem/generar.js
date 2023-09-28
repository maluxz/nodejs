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

// Función para generar Lorem Ipsum con párrafos aleatorios y escribirlo en un archivo
function generarLoremIpsum(cantidadParrafos, nombreArchivo) {
  let loremText = '';

  for (let i = 0; i < cantidadParrafos; i++) {
    const cantidadPalabras = Math.floor(Math.random() * 50) + 10; // Entre 10 y 59 palabras por párrafo
    loremText += generarParrafoLoremIpsum(cantidadPalabras);
  }

  fs.writeFile(nombreArchivo, loremText, (err) => {
    if (err) {
      console.error('Error al escribir en el archivo:', err);
    } else {
      console.log(`Se ha generado un archivo "${nombreArchivo}" con ${cantidadParrafos} párrafos de Lorem Ipsum.`);
    }
  });
}

const cantidadParrafosLoremIpsum = 500000; // Cambia este valor al número de párrafos que desees
const nombreArchivo = 'LoremIpsum.txt';

generarLoremIpsum(cantidadParrafosLoremIpsum, nombreArchivo);

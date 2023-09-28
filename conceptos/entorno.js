let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'Sin WEB';

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);

moneda = Math.random();
console.log(moneda);

if (moneda < 0.5) {
    console.log(0)
} else {
    console.log(1)
}

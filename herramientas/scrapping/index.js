const puppeteer = require('puppeteer');

(async() => {
    console.log('Ejecutamos navegador');
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    var titulo1 = await page.evaluate(() => {
        const h1 = document.querySelector('title');
        console.log(h1.innerHTML);

        return h1.innerHTML;
    });

    console.log(titulo1);

    console.log('Cerramos navegador');
    // browser.close();
    console.log('Navegador cerrado');
})();
const http = require('http');
const url = require('url');
const fs = require('fs');
const replacer = require('./tools/replacer');

const data = JSON.parse(fs.readFileSync(`${__dirname}/data/data.json`));
const overview = fs.readFileSync(`${__dirname}/public/html/overview.html`, 'utf-8');
const overviewCss = fs.readFileSync(`${__dirname}/public/css/overview.css`, 'utf-8');
const mainJs = fs.readFileSync(`${__dirname}/public/main.js`, 'utf-8');
const card = fs.readFileSync(`${__dirname}/public/html/card.html`, 'utf-8');
const product = fs.readFileSync(`${__dirname}/public/html/product.html`, 'utf-8');
const productCss = fs.readFileSync(`${__dirname}/public/css/product.css`, 'utf-8');

const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);
    console.log(req.url, pathname);
    if (pathname == '/' || pathname == '/overview') {
        res.writeHead(200, { 'Conttent-type': 'text/html' });
        res.end(overview);
    } else if (pathname == 'api') {
        res.end(data);
    } else if (pathname == '/css/overview.css') {
        res.writeHead(200, { 'Conttent-type': 'text/plain' });
        res.end(overviewCss);
    } else if (pathname == '/css/product.css') {
        res.writeHead(200, { 'Conttent-type': 'text/plain' });
        res.end(productCss);
    } else if (pathname == '/cards') {
        const cards = data.map(el => replacer(el, card)).join('');
        res.end(cards);
        res.end();
    } else if (pathname == '/main.js') {
        res.end(mainJs);
    } else if (pathname == '/detail') {
        res.end(replacer(data[query.id], product));
    } else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end('<h1>Not Found</h1>');
    }
});

server.listen(3000);

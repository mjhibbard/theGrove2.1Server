const http          = require("http");
const express       = require("express");
const path          = require("path");
const sass          = require("node-sass-middleware");
const PORT          = process.env.PORT || 3000;
const favicon       = require("serve-favicon");
const destPath      = path.join(__dirname, 'public');
const server        = http.createServer(express());



express()
    //App Config
    .use(sass({
        src: __dirname + '/public',
        dest: destPath,
        debug: false,
        outputStyle: "compressed",
        response: true
    }))
    .use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    //Routes
    .get('/', (req, res) => res.render('index'))
    .get('/about', (req, res) => res.render('about'))
    .get('/call', (req, res) => res.render('call'))
    .get('/coffee', (req, res) => res.render('coffee'))
    .get('/contact', (req, res) => res.render('contact'))
    .get('/story', (req, res) => res.render("story"))
    .get('/showcase', (req, res) => res.render('showcase'))
    .get('/splash', (req, res) => res.render('splash'))
    .get('/media', (req, res) => res.redirect('/about'))
    .get('*', (req, res) => res.render('404'))
    .listen(PORT, (req, res) => console.log(`The Grove server is running on http://localhost:${PORT}/`))

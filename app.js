const http          = require("http");
const express       = require("express");
const path          = require("path");
const PORT          = process.env.PORT || 3000;
const hostname      = '127.0.0.1';
const favicon       = require("serve-favicon");
const newSiteRoutes = require("./routes/newSite");
const server        = http.createServer(express());

express()
    //App Config
    .use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))
    .use(express.static(path.join(__dirname, 'public')))
    .use('/new', newSiteRoutes)
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    //Routes
    .get('/', (req, res) => res.render('splash'))
    .get('/about', (req, res) => res.redirect('/'))
    .get('/call', (req, res) => res.redirect('/'))
    .get('/coffee', (req, res) => res.redirect('/'))
    .get('/contact', (req, res) => res.redirect('/'))
    .get('/story', (req, res) => res.redirect("/"))
    .get('/media', (req, res) => res.redirect('/'))
    .listen(PORT, hostname, (req, res) => console.log(`The Grove server is running on http://${hostname}:${PORT}/`))

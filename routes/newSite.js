const express = require('express');
const router = express.Router({mergeParams: true});
const path = require("path");

router
  .use(express.static(path.join(__dirname, '/../public')))
  // prefix = /new
  .get('/', (req, res) => res.render('index'))
  .get('/about', (req, res) => res.render('about'))
  .get('/call', (req, res) => res.render('call'))
  .get('/coffee', (req, res) => res.render('coffee'))
  .get('/story', (req, res) => res.render('story'))

  module.exports = router;

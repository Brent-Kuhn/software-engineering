var express = require('express');
var router = express.Router();

/* GET About page. */
function renderAboutPage(req, res, next) {
  res.render('about', { title: 'About' });
};

module.exports = {
    renderAboutPage: renderAboutPage
};
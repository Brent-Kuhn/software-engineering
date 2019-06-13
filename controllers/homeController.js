var express = require('express');
var router = express.Router();

/* GET home page. */
function renderHomePage(req, res, next) {
  res.render('index', { title: 'Home' });
};

module.exports = {
    renderHomePage: renderHomePage
};
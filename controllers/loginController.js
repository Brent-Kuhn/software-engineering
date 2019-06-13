var express = require('express');
var router = express.Router();

/* GET Events page. */
function renderLoginPage(req, res, next) {
  res.render('login', { title: 'Express' });
};

module.exports = {
  renderLoginPage: renderLoginPage
};
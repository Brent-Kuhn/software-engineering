var express = require('express');
var router = express.Router();

/* GET Login page. */
function renderLoginPage(req, res, next) {
  res.render('login', { title: 'Login' });
};

module.exports = {
  renderLoginPage: renderLoginPage
};
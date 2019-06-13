var express = require('express');
var router = express.Router();

/* GET Create Account page. */
function renderCreateAccountPage(req, res, next) {
  res.render('createAccount', { title: 'Express' });
};

module.exports = {
  renderCreateAccountPage: renderCreateAccountPage
};
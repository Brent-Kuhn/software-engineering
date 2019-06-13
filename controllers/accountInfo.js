var express = require('express');
var router = express.Router();

/* GET Create Account page. */
function renderAccountInfoPage(req, res, next) {
  res.render('accountInfo', { title: 'Express' });
};

module.exports = {
  renderAccountInfoPage: renderAccountInfoPage
};
var express = require('express');
var router = express.Router();

/* GET Account page. */
function renderAccountInfoPage(req, res, next) {
  res.render('accountInfo', { title: 'Account Info' });
};

module.exports = {
  renderAccountInfoPage: renderAccountInfoPage
};
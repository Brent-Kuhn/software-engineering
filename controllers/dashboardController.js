var express = require('express');
var router = express.Router();

/* GET Dashboard page. */
function renderDashboardPage(req, res, next) {
  res.render('dashboard', { title: 'Express' });
};

module.exports = {
  renderDashboardPage: renderDashboardPage
};
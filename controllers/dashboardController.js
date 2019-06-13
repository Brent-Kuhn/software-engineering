var express = require('express');
var router = express.Router();

/* GET Dashboard page. */
function renderDashboardPage(req, res, next) {
  res.render('dashboard', { title: 'Dashboard' });
};

module.exports = {
  renderDashboardPage: renderDashboardPage
};
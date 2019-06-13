var express = require('express');
var router = express.Router();

/* GET Events page. */
function renderEventsPage(req, res, next) {
  res.render('events', { title: 'Express' });
};

module.exports = {
  renderEventsPage: renderEventsPage
};
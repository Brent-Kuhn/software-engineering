var express = require('express');
var router = express.Router();

/* GET Rooms page. */
function renderReservationsPage(req, res, next) {
  res.render('reservations', { title: 'Reservations' });
};

module.exports = {
    renderReservationsPage: renderReservationsPage
};
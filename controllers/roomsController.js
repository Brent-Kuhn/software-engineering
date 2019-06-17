var express = require('express');
var router = express.Router();

/* GET Rooms page. */
function renderRoomsPage(req, res, next) {
  res.render('rooms', { title: 'Rooms' });
};

module.exports = {
    renderRoomsPage: renderRoomsPage
};
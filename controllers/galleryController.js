var express = require('express');
var router = express.Router();

/* GET Gallery page. */
function renderGalleryPage(req, res, next) {
  res.render('gallery', { title: 'Gallery' });
};

module.exports = {
    renderGalleryPage: renderGalleryPage
};
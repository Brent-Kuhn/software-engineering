var express = require('express');
var router = express.Router();

/* GET Gallery page. */
function renderGalleryPage(req, res, next) {
  res.render('gallery', { title: 'Express' });
};

module.exports = {
    renderGalleryPage: renderGalleryPage
};
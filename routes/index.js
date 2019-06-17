var express = require('express');
var router = express.Router();

var homeController = require('../controllers/homeController');
router.get('/', homeController.renderHomePage);

var aboutController = require('../controllers/aboutController');
router.get('/about', aboutController.renderAboutPage);

var galleryController = require('../controllers/galleryController');
router.get('/gallery', galleryController.renderGalleryPage);

var eventsController = require('../controllers/eventsController');
router.get('/events', eventsController.renderEventsPage);

var loginController = require('../controllers/loginController');
router.get('/login', loginController.renderLoginPage);

var createAccountController = require('../controllers/createAccountController');
router.get('/createAccount', createAccountController.renderCreateAccountPage);

var dashboardController = require('../controllers/dashboardController');
router.get('/dashboard', dashboardController.renderDashboardPage);

var accountInfoController = require('../controllers/accountInfo');
router.get('/accountInfo', accountInfoController.renderAccountInfoPage);

var roomsController = require('../controllers/roomsController');
router.get('/rooms', roomsController.renderRoomsPage);

var reservationsController = require('../controllers/reservationsController');
router.get('/reservations', reservationsController.renderReservationsPage);

module.exports = router;
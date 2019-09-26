const express = require('express');
const router = express.Router();
const mainController = require("../controllers/main");

/* GET home page. */
router.get('/buyticket', function (req, res, next) {
  res.render('buyticket');
});

/* GET Dashboard page. */
router.get('/standings', function (req, res, next) {
  res.render('standings');
});
router.get('/topperformer', function (req, res, next) {
  res.render('topperformer');
});
router.get('/', function (req, res, next) {
  res.render('home_page');
});

/* GET Login Page. */
router.get('/home_page', mainController.getHome);



module.exports = router;
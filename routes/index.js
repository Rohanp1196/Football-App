const express = require('express');
const router = express.Router();
const mainController = require("../controllers/main");

/* GET home page. */
router.get('/buyticket', function(req, res, next) {

    if (req.session.user) {
        var val = req.session.user.username;
        res.render('buyticket', { name: val });
    } else {
        res.redirect('login');
    }


});

router.get('/dragger', function(req, res, next) {
    if (req.session.user) {
        var val = req.session.user.username;
        res.render('dragger', { name: val });
    } else {
        res.redirect('login');
    }


});

/* GET Dashboard page. */
router.get('/standings', function(req, res, next) {
    if (req.session.user) {
        var val = req.session.user.username;
        res.render('standings', { name: val });
    } else {
        res.redirect('login');
    }


});
router.get('/home_page', function(req, res, next) {

    // res.render('home',{user:val});

    if (req.session.user) {
        var val = req.session.user.username;
        res.render('home_page', { name: val });
    } else {
        res.redirect('login');
    }

});

router.get('/topperformer', function(req, res, next) {

    if (req.session.user) {
        var val = req.session.user.username;
        res.render('topperformer', { name: val });
    } else {
        res.redirect('login');
    }


});
router.get('/teams', function(req, res, next) {

    if (req.session.user) {
        var val = req.session.user.username;
        res.render('teams', { name: val });
    } else {
        res.redirect('login');
    }


});

router.get('/', function(req, res, next) {
    if (req.session.user) {
        var val = req.session.user.username;
        res.render('home_page', { name: val });
    } else {
        res.render('register');
    }

});

router.get('/login', function(req, res, next) {

    if (req.session.user) {
        var val = req.session.user.username;
        res.render('home_page', { name: val });
    } else {
        res.render('login', { message: '' });
    }


});
router.get('/register', function(req, res, next) {

    if (req.session.user) {
        var val = req.session.user.username;
        res.render('home_page', { name: val });
    } else {
        res.render('register');
    }

});
router.post('/register', mainController.post_register);
router.post('/login', mainController.post_login);

router.get('/logout', mainController.get_logout);

// router.post('/register', function(req, res, next) {

//     res.render('register');
// });
// router.post('/register', ctrlMain.post_register);
/* GET Login Page. */
router.get('/home_page', mainController.getHome);

router.get('/ronaldo', function(req, res, next) {
    console.log("got request for ronaldo");
    if (req.session.user) {
        var val = req.session.user.username;
        res.render('ronaldo', { name: val });
    } else {
        res.redirect('login');
    }


});
router.get('/messi', function(req, res, next) {
    console.log("got request for messi");
    if (req.session.user) {
        var val = req.session.user.username;
        res.render('messi', { name: val });
    } else {
        res.redirect('login');
    }


});

router.get('/neymar', function(req, res, next) {

    if (req.session.user) {
        var val = req.session.user.username;
        res.render('neymar', { name: val });
    } else {
        res.redirect('login');
    }


});





module.exports = router;
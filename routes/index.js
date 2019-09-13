var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");

/*
 * GET home page.
 */
router.get('/', ctrlMain.home);

/*
 * GET text fields page.
 */
router.get('/topperformer', ctrlMain.get_topperformer);

/*
 * POST text fields page.
 */

/*
 * GET check boxes page.
 */
router.get('/standings', ctrlMain.get_standings);

/*
 * Post check boxes page.
 */


/*
 * GET radio buttons page.
 */
router.get('/buyticket', ctrlMain.get_buyticket);

/*
 * POST radio buttons page.
 */
router.post('/radiobuttons', ctrlMain.post_radiobuttons);

/*
 * GET menu page.
 */
router.get('/menu', ctrlMain.get_menu);

/*
 * POST menu page.
 */
router.post('/menu', ctrlMain.post_menu);

module.exports = router;

const express = require('express');
const mainController = require('./../controllers/mainControllers');
const exp = require('constants');

const router = express.Router();

router.route('/').get(mainController.home);
router.route('/lens').get(mainController.getLens);

module.exports = router
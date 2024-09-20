const express = require('express');
const mainController = require(`./../controllers/mainControllers`);

const router = express.Router();

router.route('/upload').post(mainController.getImage);
router.route('/img').get(mainController.getLens);

module.exports = router;
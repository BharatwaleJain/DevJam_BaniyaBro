const express = require('express');
const mainController = require(`./../controllers/mainControllers`);

const router = express.Router();

router.route('/upload').post(mainController.getImage);
//.get(mainController.getLens);

module.exports = router;
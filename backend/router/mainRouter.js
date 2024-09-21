const express = require('express');
const mainController = require(`./../controllers/mainControllers`);

const router = express.Router();

router.route('/upload').post(mainController.getImage);
router.route('/submit-email').post(mainController.getEmail);
router.route('/getData').get(mainController.sendData);

module.exports = router;
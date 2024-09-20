const express = require('express');
const mainController = require(`./../controllers/mainControllers`);

const router = express.Router();

router.route('/upload').post(mainController.upload.single('file'), mainController.getImage);

module.exports = router;
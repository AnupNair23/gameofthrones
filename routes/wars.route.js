const express = require('express');
const router = express.Router();
const wars_controller = require('../controllers/wars.controller');


// router.post('/create', wars_controller.check);
router.get('/search', wars_controller.listBattles);
router.get('/list', wars_controller.listLocation);
router.get('/count', wars_controller.countWars)

module.exports = router;

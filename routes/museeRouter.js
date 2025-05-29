const express = require('express');
const router = express.Router();
const museeController = require('../controllers/museeController');

router.post('/musees', museeController.addMusee);

router.get('/musees', museeController.getAllMusees);

router.put('/musees/:idMusee', museeController.updateMusee);

module.exports = router;
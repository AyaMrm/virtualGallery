const express = require('express');
const router = express.Router();
const museeController = require('../controllers/museeController');

router.post('/musees', museeController.addMusee);

router.get('/musees', museeController.getAllMusees);

router.put('/musees/:idMusee', museeController.updateMusee);

router.delete('/musees/:idMusee', museeController.deleteMusee);

router.get('/musees/:idMusee', museeController.getMuseeById);

router.get('/musees/nom/:nom', museeController.getMuseeByNom);

router.get('/musees/ville/:ville', museeController.getMuseeByVille);

router.get('/musees/pays/:pay', museeController.getMuseeByPay);


module.exports = router;
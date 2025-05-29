const express = require('express');
const router = express.Router();
const artisteController = require('../controllers/artisteController');

//ajout 
router.post('/artistes', artisteController.addArtiste);

//get all 
router.get('/artistes', artisteController.getAllArtistes);

//get by id
router.get('/artistes/:idArtiste', artisteController.getArtisteById);

//update
router.put('/artistes/:idArtiste', artisteController.updateArtiste);

//delete 
router.delete('/artistes/:idArtiste', artisteController.deleteArtiste);

//get by nationalite
router.get('/artistes/nationalite/:nationalite', artisteController.getArtisteByNationalite);

//get by nom
router.get('/artistes/nom/:nom', artisteController.getArtisteByNom);

//get by prenom
router.get('/artistes/prenom/:prenom', artisteController.getArtisteByPrenom);

//get by nom prenom
router.post('/artistes/nomPrenom', artisteController.getArtisteIdParNomPrenom);

module.exports = router;
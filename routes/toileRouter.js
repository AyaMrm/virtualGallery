const express = require('express');
const router = express.Router();
const toileController = require('../controllers/toileController');


router.post('/toiles', toileController.addToile);

router.get('/toiles', toileController.getAllToile);

router.get('/toiles/:idToile', toileController.getToileById);

router.put('/toiles/:idToile', toileController.updateToile);

router.delete('/toiles/:idToile', toileController.deleteMusee);

router.get('/toiles/titre/:titre', toileController.getToileByTitre);

router.get('/toiles/artiste/:nomArtiste/:prenomArtiste', toileController.getToileByIdArtiste);

router.get('/toiles/musee/:nomMusee', toileController.getToileByIdMusee);

module.exports = router;
const express = require('express');
const router = express.Router();
const toileController = require('../controllers/toileController');
const {body, param, validationResult} = require('express-validator');


router.post('/toiles', [
    body('titre').notEmpty().withMessage('Le titre est requis'),
    body('dateCreation').notEmpty().withMessage('La date de creation est requise'),
    body('technique').notEmpty().withMessage('La technique est requis'),
    body('support').notEmpty().withMessage('Le support est requis'),
    body('style').notEmpty().withMessage('Le style est requis'),
    body('idArtiste').notEmpty().withMessage('Le id Artiste est requis'),
    body('idMusee').notEmpty().withMessage('Le id Musee du musee est requis'),
    body('titre').isString().withMessage('Le titre doit etre une chaine de caracteres'),
    body('dateCreation').isDate().withMessage('la date de creation doit etre une date valide'),
    body('technique').isString().withMessage('La technique doit etre une chaine de caracteres'),
    body('support').isString().withMessage('Le support doit etre une chaine de caracteres'),
    body('style').isString().withMessage('Le style doit etre une chaine de caracteres'),
    body('idArtiste').isInt().withMessage('Le id Artiste doit etre un entier'),
    body('idMusee').isInt().withMessage('Le id musee doit etre un entier'),
],(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }toileController.addToile(req, res, next)
});

router.get('/toiles', toileController.getAllToile);

router.get('/toiles/:idToile', [
    body('idToile').notEmpty().withMessage('Le id de la toile est requis'),
    body('idToile').isInt().withMessage('Le id de la toile doit etre un entier'),
],(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } toileController.getToileById(req, res, next)
});

router.put('/toiles/:idToile', [
    body('idToile').notEmpty().withMessage('Le id de la toile est requis'),
    body('idToile').isInt().withMessage('Le id de la toile doit etre un entier'),
],(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } toileController.updateToile(req, res, next)
});

router.delete('/toiles/:idToile', [
    body('idToile').notEmpty().withMessage('Le id de la toile est requis'),
    body('idToile').isInt().withMessage('Le id de la toile doit etre un entier'),
] ,(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } toileController.deleteMusee(req, res, next)
});

router.get('/toiles/titre/:titre', [
    body('titre').notEmpty().withMessage('Le titre est requis'),
    body('titre').isString().withMessage('Le titre doit etre une chaine de caracteres'),
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } toileController.getToileByTitre(req, res, next)
});

router.get('/toiles/artiste/:nomArtiste/:prenomArtiste',[
    body('nomArtiste').notEmpty().withMessage('Le nom d\'artiste est requis'),
    body('nomArtiste').isString().withMessage('Le nom d\'artiste  doit etre une chaine de caracteres'),
    body('prenomArtiste').notEmpty().withMessage('Le prenom d\'artiste est requis'),
    body('prenomArtiste').isString().withMessage('Le prenom d\'artiste  doit etre une chaine de caracteres'),
],(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } toileController.getToileByIdArtiste(req, res, next)
});

router.get('/toiles/musee/:nomMusee',[
    body('nomMusee').notEmpty().withMessage('Le nom de musee  est requis'),
    body('nomMusee').isString().withMessage('Le nom de musee  doit etre une chaine de caracteres'),
],(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } toileController.getToileByIdMusee(req, res, next)
});

module.exports = router;
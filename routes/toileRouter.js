const express = require('express');
const router = express.Router();
const toileController = require('../controllers/toileController');
const {body, param, validationResult} = require('express-validator');


router.post('/toiles', [
    body('titre').trim().escape().notEmpty().withMessage('Le titre est requis'),
    body('dateCreation').trim().escape().notEmpty().withMessage('La date de creation est requise'),
    body('technique').trim().escape().notEmpty().withMessage('La technique est requis'),
    body('support').trim().escape().notEmpty().withMessage('Le support est requis'),
    body('style').trim().escape().notEmpty().withMessage('Le style est requis'),
    body('idArtiste').trim().escape().notEmpty().withMessage('Le id Artiste est requis'),
    body('idMusee').trim().escape().notEmpty().withMessage('Le id Musee du musee est requis'),
    body('titre').trim().escape().isString().withMessage('Le titre doit etre une chaine de caracteres'),
    body('dateCreation').trim().escape().isDate().withMessage('la date de creation doit etre une date valide'),
    body('technique').trim().escape().isString().withMessage('La technique doit etre une chaine de caracteres'),
    body('support').trim().escape().isString().withMessage('Le support doit etre une chaine de caracteres'),
    body('style').trim().escape().isString().withMessage('Le style doit etre une chaine de caracteres'),
    body('idArtiste').trim().escape().isInt().withMessage('Le id Artiste doit etre un entier'),
    body('idMusee').trim().escape().isInt().withMessage('Le id musee doit etre un entier'),
],(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }toileController.addToile(req, res, next)
});

router.get('/toiles', toileController.getAllToile);

router.get('/toiles/:idToile', [
    body('idToile').trim().escape().notEmpty().withMessage('Le id de la toile est requis'),
    body('idToile').trim().escape().isInt().withMessage('Le id de la toile doit etre un entier'),
],(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } toileController.getToileById(req, res, next)
});

router.put('/toiles/:idToile', [
    body('idToile').trim().escape().notEmpty().withMessage('Le id de la toile est requis'),
    body('idToile').trim().escape().isInt().withMessage('Le id de la toile doit etre un entier'),
],(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } toileController.updateToile(req, res, next)
});

router.delete('/toiles/:idToile', [
    body('idToile').trim().escape().notEmpty().withMessage('Le id de la toile est requis'),
    body('idToile').trim().escape().isInt().withMessage('Le id de la toile doit etre un entier'),
] ,(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } toileController.deleteMusee(req, res, next)
});

router.get('/toiles/titre/:titre', [
    body('titre').trim().escape().notEmpty().withMessage('Le titre est requis'),
    body('titre').trim().escape().isString().withMessage('Le titre doit etre une chaine de caracteres'),
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } toileController.getToileByTitre(req, res, next)
});

router.get('/toiles/artiste/:nomArtiste/:prenomArtiste',[
    body('nomArtiste').trim().escape().notEmpty().withMessage('Le nom d\'artiste est requis'),
    body('nomArtiste').trim().escape().isString().withMessage('Le nom d\'artiste  doit etre une chaine de caracteres'),
    body('prenomArtiste').trim().escape().notEmpty().withMessage('Le prenom d\'artiste est requis'),
    body('prenomArtiste').trim().escape().isString().withMessage('Le prenom d\'artiste  doit etre une chaine de caracteres'),
],(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } toileController.getToileByIdArtiste(req, res, next)
});

router.get('/toiles/musee/:nomMusee',[
    body('nomMusee').trim().escape().notEmpty().withMessage('Le nom de musee  est requis'),
    body('nomMusee').trim().escape().isString().withMessage('Le nom de musee  doit etre une chaine de caracteres'),
],(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } toileController.getToileByIdMusee(req, res, next)
});

module.exports = router;
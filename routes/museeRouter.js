const express = require('express');
const router = express.Router();
const museeController = require('../controllers/museeController');
const {body, param, validationResult} = require('express-validator');

router.post('/musees',[
    body('nom').notEmpty().withMessage('Le nom du musee est requis'),
    body('adresse').notEmpty().withMessage('L\'adresse du musee est requise'),
    body('ville').notEmpty().withMessage('La ville du musee est requise'),
    body('pay').notEmpty().withMessage('Le pays du musee est requis'),
    body('typeMusee').notEmpty().withMessage('Le type du musee est requis'),
    body('nom').isString().withMessage('Le nom doit etre une chaine de caracteres'),
    body('adresse').isString().withMessage('L\'adresse doit etre une chaine de caracteres'),
    body('ville').isString().withMessage('La ville doit etre une chaine de caracteres'),
    body('pay').isString().withMessage('Le pays doit etre une chaine de caracteres'),
],(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } museeController.addMusee(req, res, next)
});

router.get('/musees', museeController.getAllMusees);

router.put('/musees/:idMusee',[
    param('idMusee').isInt().withMessage('L\'ID doit etre un entier'),
    param('idMusee').isEmpty().withMessage('L\'ID nedoit pas etre vide'),
    body('nom').notEmpty().withMessage('Le nom du musee est requis'),
    body('adresse').notEmpty().withMessage('L\'adresse du musee est requise'),
    body('ville').notEmpty().withMessage('La ville du musee est requise'),
    body('pay').notEmpty().withMessage('Le pays du musee est requis'),
    body('typeMusee').notEmpty().withMessage('Le type du musee est requis'),
    body('nom').isString().withMessage('Le nom doit etre une chaine de caracteres'),
    body('adresse').isString().withMessage('L\'adresse doit etre une chaine de caracteres'),
    body('ville').isString().withMessage('La ville doit etre une chaine de caracteres'),
    body('pay').isString().withMessage('Le pays doit etre une chaine de caracteres'),
],(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } museeController.updateMusee(req, res, next)
});

router.delete('/musees/:idMusee',[
    param('idMusee').isInt().withMessage('L\'ID doit etre un entier'),
    param('idMusee').isEmpty().withMessage('L\'ID nedoit pas etre vide'),
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } museeController.deleteMusee(req, res, next)
});

router.get('/musees/:idMusee',[
    param('idMusee').isInt().withMessage('L\'ID doit etre un entier'),
    param('idMusee').isEmpty().withMessage('L\'ID nedoit pas etre vide'),
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } museeController.getMuseeById(req, res, next)
});

router.get('/musees/nom/:nom', [
    param('nom').isString().withMessage('le nom doit etre une chaine de caracteres'),
    param('nom').isEmpty().withMessage('Le nom ne doit pas etre vide'),
],(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } museeController.getMuseeByNom(req, res, next)
});

router.get('/musees/ville/:ville',[
    param('ville').isString().withMessage('la ville doit etre une chaine de caracteres'),
    param('ville').isEmpty().withMessage('La ville ne doit pas etre vide'),
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } museeController.getMuseeByVille(req, res, next)
});

router.get('/musees/pays/:pay',[
    param('pay').isString().withMessage('le pay doit etre une chaine de caracteres'),
    param('pay').isEmpty().withMessage('Le pay ne doit pas etre vide'),
],(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }  museeController.getMuseeByPay(req, res, next)
});


module.exports = router;
const {body, param, validationResult} = require('express-validator');
const express = require('express');
const router = express.Router();
const artisteController = require('../controllers/artisteController');

//ajout 
router.post('/artistes',[
    body('nom').notEmpty().withMessage('Le nom est requis'), 
    body('prenom').notEmpty().withMessage('Le prenom est requis')
],(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
   artisteController.addArtiste(req, res, next) 
});

//get all 
router.get('/artistes', artisteController.getAllArtistes);

//get by id
router.get('/artistes/:idArtiste', [
    param('idArtiste').isInt().withMessage('L\'ID doit etre un entier'),
],(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }artisteController.getArtisteById(req, res,next)
});

//update
router.put('/artistes/:idArtiste', [
    param('idArtiste').isInt().withMessage('L\'ID doit etre un entier'),
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }artisteController.updateArtiste(req, res, next)
});

//delete 
router.delete('/artistes/:idArtiste',[
    param('idArtiste').isInt().withMessage('L\'ID doit etre un entier'),
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }artisteController.deleteArtiste(req, res, next())
});

//get by nationalite
router.get('/artistes/nationalite/:nationalite',[
    param('nationalite').notEmpty().withMessage('la nationalite est requise'),
    param('nationalite').isString().withMessage('La nationalite doit etre une chaine de caracteres'),
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }artisteController.getArtisteByNationalite(req, res, next)
});

//get by nom
router.get('/artistes/nom/:nom',[
    param('nom').notEmpty().withMessage('le nom est requis'),
    param('nom').isString().withMessage('Le nom doit etre une chaine de caracteres'),
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }artisteController.getArtisteByNom(req, res, next)
});

//get by prenom
router.get('/artistes/prenom/:prenom',[
    param('prenom').notEmpty().withMessage('le prenom est requis'),
    param('prenom').isString().withMessage('Le prenom doit etre une chaine de caracteres'),
] ,(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }artisteController.getArtisteByPrenom(req, res, next)
});

//get by nom prenom
router.post('/artistes/nomPrenom', [
    param('nom').notEmpty().withMessage('le nom est requis'),
    param('nom').isString().withMessage('Le nom doit etre une chaine de caracteres'),
    param('prenom').notEmpty().withMessage('le prenom est requis'),
    param('prenom').isString().withMessage('Le prenom doit etre une chaine de caracteres'),
],(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }artisteController.getArtisteIdParNomPrenom(req, res, next)
});

module.exports = router;
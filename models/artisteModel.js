const db = require('../config/db');

//avoir tous les artistes
const getAllArtistes = (callback) => {
    const query = 'SELECT * FROM artiste';
    db.query(query, callback);
}

//ajouter un artiste
const addArtiste = (artiste, callback) =>{
    const query = 'INSERT INTO artiste (nom, prenom, dateNaissance, dateDeces, nationalite) VALUES (?, ?, ?, ?, ?)';
    const values = [artiste.nom, artiste.prenom, artiste.dateNaissance, artiste.dateDeces, artiste.nationalite];
    db.query(query, values, callback);
}

//afficher un artiste par id 
const getArtisteById = (idArtiste, callback) =>{
    const query = 'SELECT * FROM artiste WHERE idArtiste = ?';
    db.query(query, [idArtiste], callback)
}

//supprimer un artiste
const deleteArtiste = (idArtiste, callback) =>{
    const query = 'DELETE FROM artiste WHERE idArtiste = ?';
    db.query(query, [idArtiste], callback);
}

//modifier un artiste 
const updateArtiste = (idArtiste, artiste, callback) =>{
    const query = 'UPDATE artiste SET nom =?, prenom = ?, dateNaissance =?, dateDeces = ?, nationalite =? WHERE idArtiste = ?';
    const values = [artiste.nom, artiste.prenom, artiste.dateNaissance, artiste.dateDeces, artiste.nationalite, idArtiste];
    db.query(query, values, callback);
}

//afficher les artistes par nationalite 
const getArtisteByNationalite = (nationalite, callback)=>{
    const query = 'SELECT * FROM artiste WHERE nationalite = ?';
    db.query(query, [nationalite], callback);
}

//afficher les artistes par nom 
const getArtisteByNom = (nom, callback)=>{
    const query = 'SELECT * FROM artiste WHERE nom = ?';
    db.query(query, [nom], callback);
}

//afficher les artiste par prenom
const getArtisteByPrenom = (prenom, callback) =>{
    const query = 'SELECT * FROM artiste WHERE prenom = ?';
    db.query(query, [prenom], callback);
}

const existeArtiste = (nom, prenom, callback) =>{
    const query = 'SELECT * FROM artiste WHERE nom =? AND prenom = ?';
    db.query(query, [nom, prenom], callback=>{
        if (err) return callback(err, null);
    if (results.length > 0) {
      callback(null, true);  
    } else {
      callback(null, false);
    }
    });
}

const getArtisteIdParNomPrenom = (nom, prenom, callback) => {
    const sql = 'SELECT id FROM artiste WHERE nom = ? AND prenom = ?';
    db.query(sql, [nom, prenom], (err, results) => {
    if (err) return callback(err);
    if (results.length > 0) {
      callback(null, results[0].id);
    } else {
      callback(null, null); 
    }
  });
};


module.exports={
    getAllArtistes, 
    addArtiste, 
    existeArtiste,
    getArtisteById,
    deleteArtiste,
    updateArtiste, 
    getArtisteByNom, 
    getArtisteByPrenom, 
    getArtisteByNationalite, 
    getArtisteIdParNomPrenom
}
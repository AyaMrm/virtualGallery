const db = require('../config/db');


const getAllMusees = (callback)=>{
    const query = 'SELECT * FROM musee';
    db.query(query, callback);
}

const addMusee = (musee, callback) =>{
    const query = 'INSERT INTO musee(nom, adresse, ville, pay, typeMusee) VALUES (?,?,?,?,?)';
    const values = [musee.nom, musee.adresse, musee.ville, musee.pay, musee.typeMusee];
    db.query(query, values, callback);
}

const getMuseeById = (idMusee, callback)=>{
    const query = 'SELECT * FROM musee WHERE idMusee = ?';
    db.query(query, [idMusee], callback);
}

const deleteMusee = (idMusee, callback)=>{
    const query = 'DELECTE FROM musee WHERE idMusee =?';
    db.query(query, [idMusee], callback);
}

const updateMusee = (idMusee, musee, callback)=>{
    const query = 'UPDATE musee SET nom= ? , adresse=?, ville=?, pay=?, typeMusee=? WHERE idMusee=?';
    const values = [musee.nom, musee.adresse, musee.ville, musee.pay, musee.typeMusee, idMusee];
    db.query(query, values, callback);
}

const getMuseeByNom = (nom, callback)=>{
    const query = 'SELECT * FROM musee WHERE nom =?';
    db.query(query, [nom], callback);
}

const getMuseeByVille = (ville, callback)=>{
    const query = 'SELECT * FROM musee WHERE ville =?';
    db.query(query, [ville], callback);
}

const getMuseeByPay = (pay, callback)=>{
    const query = 'SELECT * FROM musee WHERE pay =?';
    db.query(query, [apy], callback);
}

const getMuseeIdParNom = (nom, callback) => {
  const sql = 'SELECT id FROM musee WHERE nom = ?';
  db.query(sql, [nom], (err, results) => {
    if (err) return callback(err);
    if (results.length > 0) {
      callback(null, results[0].id);
    } else {
      callback(null, null); // Musée non trouvé
    }
  });
};


module.exports={
    getAllMusees, 
    addMusee, 
    getMuseeById,
    deleteMusee, 
    getMuseeByNom,
    getMuseeByPay, 
    getMuseeByVille, 
    updateMusee, 
    getMuseeIdParNom
}
const db = require('../config/db');
const artisteModel = require('./artisteModel');
const museeModel = require('./museeModel');

const getAllToile = (callback)=>{
    const query = 'SELECT * FROM toile';
    db.query(query, callback);
}

const addToile = (toile, callback)=>{
    const query = 'INSERT INTO toile (titre, dateCreation, technique, support, style, idArtiste, idMusee) VALUES (?,?, ?, ?, ?, ?, ?)';
    const values = [toile.titre, toile.dateCreation, toile.technique, toile.support, toile.style, toile.idArtiste, toile.idMusee];
    db.query(query, values, callback);
}

const getToileById =(idToile, callback)=>{
    const query = 'SELECT * FROM toile WHERE idToile =?';
    db.query(query, [idToile], callback);
}

const deleteToile =(idToile, callback)=>{
    const query = 'DELETE FROM toile WHERE idToile =?';
    db.query(query, [idToile], callback);
}

const updateToile = (idToile, toile, callback) => {
    const query = 'UPDATE toile SET titre = ?, dateCreation = ?, technique = ?, support = ?, style = ?, idArtiste = ?, idMusee = ? WHERE idToile = ?';
    const values = [
        toile.titre,
        toile.dateCreation,
        toile.technique,
        toile.support,
        toile.style,
        toile.idArtiste,
        toile.idMusee,
        idToile 
    ];
    db.query(query, values, callback);
};


const getToileByTitre = (titre, callback)=>{
    const query = 'SELECT * FROM toile WHERE titre =?';
    db.query(query, [titre], callback);
}

const getToileByIdArtiste =(idArtiste, callback)=>{
    const query = 'SELECT * FROM toile WHERE idArtiste=?';
    db.query(query, [idArtiste], callback);
}

const getToileByIdMusee=(idMusee, callback)=>{
    const query = 'SELECT * FROM toile WHERE idMusee =?';
    db.query(query, [idMusee], callback);
}

module.exports ={
    getAllToile, 
    addToile, 
    getToileById, 
    deleteToile, 
    updateToile, 
    getToileByIdArtiste, 
    getToileByIdMusee,
    getToileByTitre
}
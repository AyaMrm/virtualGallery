const toileModel = require('../models/toileModel');
const artisteModel = require('../models/artisteModel');
const museeModel = require('../models/museeModel');

const getAllToile = (req, res)=>{
    toileModel.getAllToile((err, result)=>{
        if(err){
            console.error("erreur lors de la recuperation des toiles:", err);
            return res.status(500).json({error: "Erreur lors de la recuperation des toiles"});
        }
        res.status(200).json({
            message: "Toile recuperer avec succes", 
            toiles : result
        })
    })
}

const addToile = (req, res)=>{
    const {titre, dateCreation, technique, support, style, nomArtiste, prenomArtiste, nomMusee} = req.body;

    artisteModel.getArtisteIdParNomPrenom(nomArtiste, prenomArtiste, (err, idArtiste)=>{
        if(err){
            console.error("Erreur lorsd de la recuperation de l'artiste:", err);
            return res.status(500).json({error:"Erreur lors de la recuperation de l'artiste"});
        }
        if(!idArtiste){
            return res.status(404).json({error:"Artiste non trouver !!"});
        }

        museeModel.getMuseeIdParNom(nomMusee, (er, idMusee)=>{
            if(er){
                console.error("Erreur lors de la recuperation du musee:", er);
                return res.status(500).json({error:"Erreur lors de la recuperation du musee"});
            }
            if(!idMusee){
                return res.status(404).json({error:"Musee non trouver!!"});
            }

            toileModel.addToile({titre, dateCreation, technique, support, style, idArtiste, idMusee}, (errr, result)=>{
                if(errr){
                    console.error("Erreur lors de l'ajout de la toile:", errr);
                    return res.status(500).json({error:"Erreur lors de l'ajout de la toile"});
                }
                res.status(201).json({
                    message :"Toile ajouter avec succes",
                    result: result
                })
            })
        })
    })
}

const getToileById=(req, res)=>{
    const idToile = req.params.idToile;
    toileModel.getToileById(idToile, (err, result)=>{
        if(err){
            console.error("Erreur lors de la recuperation de la toile:", err);
            return res.status(500).json({error:"Erreur lors de la recuperation de la toile"});
        }
        if(result.length ===0){
            return res.status(404).json({error:"Toile non trouver !!"});
        }
        res.status(200).json({
            message:"Toile recuperer avec succes", 
            toile: result
        })
    })
}

const updateToile =(req, res)=>{
    const idToile = req.params.idToile;
    const toile = req.body;
    toileModel.updateToile(idToile, toile, (err, result)=>{
        if(err){
            console.error("Erreur lors de la maj de la toile:", err);
            return res.status(500).json({error: "erreur lors de la maj de la toile"});
        }
        res.status(200).json({
            message:"toile maj avec succes", 
            result:result
        })
    })
}

const deleteMusee =(req, res)=>{
    const idToile = req.params.idToile;
    toileModel.deleteToile(idToile, (err, result)=>{
        if(err){
            console.error("Erreur lors de la suppression de la toile:", err);
            return res.status(500).json({error:"Erreur lors de la recuperation de la toile "});
        }
        res.status(200).json({
            message : "Toile supprimer avec succes", 
            result: result
        })
    })
}

const getToileByTitre =(req, res)=>{
    const titre = req.params.titre;
    toileModel.getToileByTitre(titre, (err, result)=>{
        if(err){
            console.error("Erreur lors de la recuperation de la toile par titre:", err);
            return res.status(500).json({error:"erreur lors de la recuperation de la toile par titre"});
        }
        res.status(200).json({
            message:"Toile recuperer par titre avec succes",
            toile: result 
        })
    })
}

const getToileByIdArtiste = (req, res)=>{
    const {nomArtiste, prenomArtiste} = req.params;
    artisteModel.getArtisteIdParNomPrenom(nomArtiste, prenomArtiste, (err, idArtiste)=>{
        if(err){
            console.error("Erreur lors de la recuperation de l'artiste:", err);
            return res.status(500).json({error:"Erreur lors de la recuperation de l'artiste"});
        }
        if(!idArtiste){
            return res.status(404).json({error:"Artiste non trouver!!"});
        }
        toileModel.getToileByIdArtiste(idArtiste, (errr, result)=>{
            if(errr){
                console.error("Erreur lors de la recuperation des toiles par artiste:", errr);
                return res.status(500).json({error:"erreur lors de la recuperation des toiles par artiste"});
            }
            res.status(200).json({
                message: "Toiles recuperer avec succes",
                result: result
            })
        })
    })
}

const getToileByIdMusee =(req, res)=>{
    const nomMusee = req.params.nomMusee;
    museeModel.getMuseeIdParNom(nomMusee, (err, idMusee)=>{
        if(err){
            console.error("Erreur lors de la recuperation du musee:", err);
            return res.status(500).json({error:"Erreur lors de la recuperation du musee"});
        }
        if(!idMusee){
            return res.status(404).json({error : "Musee non trouver !!"});
        }
        toileModel.getToileByIdMusee(idMusee, (errr, result)=>{
            if(errr){
                console.error("erreur lors de la recuperation des toiles par musee:", errr);
                return res.status(500).json({error:"Erreur lors de la recuperation des toiles par musee"});
            }
            res.status(200).json({
                message:"Toiles recuperer par musee avec succes",
                result: result
            })
        })
    })
}

module.exports ={
    addToile, 
    getAllToile, 
    updateToile, 
    deleteMusee, 
    getToileById, 
    getToileByTitre, 
    getToileByIdArtiste,
    getToileByIdMusee
}
const museeModel = require('../models/museeModel');

const addMusee =(req, res)=>{
    const musee = req.body;
    museeModel.addMusee(musee, (err, result)=>{
        if(err){
            console.error("Erreur lors de l'ajout du musee:", err);
            return res.status(500).json({error:"Erreur lors de l'ajout du musee"});
        }
        res.status(201).json({message: "Musee ajoute avec succes", musee: result});
    })
}

const getAllMusees = (req, res)=>{
    museeModel.getAllMusees((err, result)=>{
        if(err){
            console.error("Erreur lors de la recuperation des musees:", err);
            return res.status(500).json({error:"Erreur lors de la recuperation des musees"});
        }
        res.status(200).json({message: "Musees recuperes avec succes", musees: result});
    })
}

const getMuseeById = (req, res)=>{
    const id = req.params.idMusee;
    museeModel.getMuseeById(id, (err, result)=>{
        if(err){
            console.error("Erreur lors de la recuperation du musee:", err);
            return res.status(500).json({error:"Erreur lors de la recuperation du musee"});
        }
        res.status(200).json({message:"Musee recuperer avec succes", musee: result});
    })
}


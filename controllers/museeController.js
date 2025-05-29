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

const updateMusee = (req, res)=>{
    const idMusee = req.params.idMusee;
    const musee = req.body;
    museeModel.updateMusee(idMusee, musee, (err, result)=>{
        if(err){
            console.errorr("Erreur lors de la mise a jour du musee:", err);
            return res.status(500).json({error: "Erreur lors de la maj du musee"});
        }
        res.status(200).json({
            message: "Musee maj avec succes", 
            musee: result
        })
    })
}

const deleteMusee =(req, res)=>{
    const idMusee = req.params.idMusee;
    museeModel.deleteMusee(idMusee, (err, result)=>{
        if(err){
            console.error("Erreur lors de la suppression du musee:", err);
            return res.status(500).json({error:"Erreur lors de la suppression du musee"});
        }
        res.status(200).json({
            message:"Musee supprimer avec succes", 
            musee: result
        })
    })
}

const getMuseeByNom =(re, res)=>{
    const nom = re.params.nom;
    museeModel.getMuseeByNom(nom, (err, result)=>{
        if(err){
            console.error("Erreur lors de la recuperation du musee par nom:", err);
            return res.status(500).json({error : "Erreur lors de la recuperation du musee par nom"});
        }
        res.status(200).json({
            message:"Musee recuperer par nom avec succes",
            musee: result
        })
    })
}

const getMuseeByVille =(req, res)=>{
    const ville = req.params.ville;
    museeModel.getMuseeByVille(ville, (err, result)=>{
        if(err){
            console.error("erreur lorsd e la recuperation des musee par ville:", err);
            return res.status(500).json({error: "Erreur lors de la recuparation des museee par ville"});
        }
        res.status(200).json({
            message:"Musees recuperer par ville avec succes", 
            musee : result
        })
    })
}


const getMuseeByPay =(req, res)=>{
    const pay = req.params.pay;
    museeModel.getMuseeByPay(pay, (err, result)=>{
        if(err){
            console.error("erreur lorsd e la recuperation des musee par pays:", err);
            return res.status(500).json({error: "Erreur lors de la recuparation des museee par pays"});
        }
        res.status(200).json({
            message:"Musees recuperer par pays avec succes", 
            musee : result
        })
    })
}


const getMuseeIdParNom =(req, res)=>{
    const nom = req.params.nom;
    museeModel.getMuseeIdParNom(nom, (err, result)=>{
        if(err){
            console.error("erreur lorsd e la recuperation d'ID musee par nom:", err);
            return res.status(500).json({error: "Erreur lors de la recuparation d'ID museee par nom"});
        }
        res.status(200).json({
            message:"ID Musees recuperer avec succes", 
            musee : result
        })
    })
}

module.exports ={
    addMusee, 
    getAllMusees, 
    getMuseeById, 
    updateMusee, 
    deleteMusee, 
    getMuseeByNom, 
    getMuseeByVille, 
    getMuseeByPay, 
    getMuseeIdParNom
}
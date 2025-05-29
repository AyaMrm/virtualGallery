const artisteModel = require('../models/artisteModel');


const addArtiste = (req, res)=>{
    const artiste = req.body;
    artisteModel.addArtiste(artiste, (err, result)=>{
        if(err){
            console.error("Erreur lors de l'ajout de l'artiste:", err);
            res.status(500).json({error:"Erreur lors de l'ajout de l'artiste"});
        }
        res.status(201).json({message : "artiste ajouter avec succes", artiste: result});
    });
};

const getAllArtistes = (req, res)=>{
    artisteModel.getAllArtistes((err, result)=>{
        if(err){
            console.error("Erreur lors de la recuperationdes artistes:", err);
            return res.status(500).json({error:"Erreur lors de la recuperation des artistes"});
        }
        res.status(201).json({message : "Artistes recuperes avec succes", artistes: result});
    });
};

const getArtisteById = (req, res)=>{
    const id = req.params.idArtiste;
    artisteModel.getArtisteById(id, (err, result)=>{
        if(err){
            console.error("Erreur lors de la recuperation de l'ertiste:", err);
            return res.status(500).json({error:"Erreur lors de la recuperation de l'artiste"});
        }
        res.status(201).json({message:"Artiste recuperer avec succes", artiste: result});
    })
}

const updateArtiste =(req, res)=>{
    const id = req.params.idArtiste;
    const updatedArtiste = req.body;
    artisteModel.updateArtiste(id, updatedArtiste, (err, result)=>{
        if(err){
            console.error("Erreur lors de la mise a jour de l'artiste:", err);
            return res.status(500).json({error:"Erreur lors de la mise a jour de l'artiste"});
        }
        res.status(200).json({message:"Artiste mis a jour avec succes", artiste: result});
    })
};

const deleteArtiste = (req, res)=>{
    const id = req.params.idArtiste;
    artisteModel.deleteArtiste(id, (err, result)=>{
        if(err){
            console.error("Erreur lors de la suppression de l'artiste:", err);
            return res.status(500).json({message:"Erreur lors de la suppression de l'artiste"});
        }
        res.status(200).json({message:"Artiste supprimer avec succes"});
    })
}

const getArtisteByNationalite = (req, res)=>{
    const nationalite = req.params.nationalite;
    artisteModel.getArtisteByNationalite(nationalite, (err, result)=>{
        if(err){
            console.error("Erreur lors de la recuperation des artistes par nationalite:", err);
            return res.status(500).json({error:"Erreur lors de la recuperation des artistes par nat"});
        }
        res.status(200).json({message:"Artistes recuperes par nationalite avec succes", artistes: result});
    })
}

const getArtisteByNom = (req, res)=>{
    const nom = req.params.nom;
    artisteModel.getArtisteByNom(nom, (err, result)=>{
        if(err){
            console.error("Erreur lors de la recuperation des artistes par nom:", err);
            return res.status(500).json({error:"Erreur lors de la recuperation des artistes par nom"});
        }
        res.status(200).json({message:"Artistes recuperes par nom avec succes", artistes: result});
    })
}

const getArtisteByPrenom = (req, res)=>{
    const prenom = req.params.prenom;
    artisteModel.getArtisteByPrenom(prenom, (err, result)=>{
        if(err){
            console.error("Erreur lors de la recuperation des artistes par prenom:", err);
            return res.status(500).json({error:"Erreur lors de la recuperation des artistes par prenom"});
        }
        res.status(200).json({message:"Artistes recuperes par prenom avec succes", artistes: result});
    })
}

const existeArtiste =(req, res)=>{
    const {nom, prenom} = req.body;
    artisteModel.existeArtiste(nom, prenom, (err, existe)=>{
        if(err){
            console.error("Erreur lors de la verification de l'existance de l'artiste:", err);
            return res.status(500).json({error:"Erreur lors de la verification de l'existeance"});
        }
        res.status(200).json({message:"Verification effectuee avec succes", existe: existe});
    })
}

const getArtisteIdParNomPrenom = (req, res) => {
  console.log("req.body:", req.body);  // <-- Ajoute ce log

  const { nom, prenom } = req.body;
  console.log("nom:", nom, "prenom:", prenom);  // <-- Et celui-ci aussi

  artisteModel.getArtisteIdParNomPrenom(nom, prenom, (err, idArtiste) => {
    if (err) {
      console.error("Erreur lors de la recuperation de l'ID de l'artiste:", err);
      return res.status(500).json({ error: "Erreur lors de la recuperation de l'ID de l'artiste" });
    }

    console.log("ID récupéré :", idArtiste);
    res.status(200).json({
      message: "ID de l'artiste récupéré avec succès",
      idArtiste: idArtiste
    });
  });
};


module.exports={
    getAllArtistes,
    addArtiste,
    getArtisteById,
    updateArtiste,
    deleteArtiste,
    getArtisteByNationalite, 
    getArtisteByNom, 
    getArtisteByPrenom, 
    existeArtiste, 
    getArtisteIdParNomPrenom
}
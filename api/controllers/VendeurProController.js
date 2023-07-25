const VendeurPro = require('../models/VendeurPro');
const bcrypt = require("bcryptjs");

// Contrôleur pour créer un nouveau vendeur professionnel
exports.creerVendeurPro = function (req, res) {
  const nouveauVendeurPro = new VendeurPro({
    nom: req.body.nom,
    adresse: req.body.adresse,
    email: req.body.email,
    telephone: req.body.telephone,
    password: req.body.password,
  });

  nouveauVendeurPro.save(function (err) {
    if (err) {
      res.status(500).send({ message: "Erreur lors de la création du vendeur professionnel : " + err });
    } else {
      res.status(201).send({ message: "Vendeur professionnel créé avec succès !" });
    }
  });
};


exports.login=async(req,res)=>{
  // Checking if the client email exist
const client = await Clients.findOne({ email: req.body.email });
if (!client) return res.status(400).json({
 status: false,
 message: "Email incorrect"});

//Password is correct
const validPassword = await bcrypt.compare(req.body.password, client.password);

if (!validPassword) return res.status(400).json({
 status: false,
 message: "mot de passe incorrect"});
return  res.status(201).json({
 status: true,   
 message:'connexion reussi',
 data: client
 });
}

// Contrôleur pour récupérer tous les vendeurs professionnels
exports.recupererVendeursPro = function (req, res) {
  VendeurPro.find({}, function (err, vendeursPro) {
    if (err) {
      res.status(500).send({ message: "Erreur lors de la récupération des vendeurs professionnels : " + err });
    } else {
      res.status(200).send(vendeursPro);
    }
  });
};

// Contrôleur pour récupérer un vendeur professionnel par son ID
exports.recupererVendeurPro = function (req, res) {
  VendeurPro.findById(req.params.id, function (err, vendeurPro) {
    if (err) {
      res.status(500).send({ message: "Erreur lors de la récupération du vendeur professionnel : " + err });
    } else if (!vendeurPro) {
      res.status(404).send({ message: "Vendeur professionnel non trouvé" });
    } else {
      res.status(200).send(vendeurPro);
    }
  });
};

// Contrôleur pour mettre à jour un vendeur professionnel par son ID
exports.mettreAJourVendeurPro = function (req, res) {
  VendeurPro.findByIdAndUpdate(req.params.id, req.body, function (err, vendeurPro) {
    if (err) {
      res.status(500).send({ message: "Erreur lors de la mise à jour du vendeur professionnel : " + err });
    } else if (!vendeurPro) {
      res.status(404).send({ message: "Vendeur professionnel non trouvé" });
    } else {
      res.status(200).send({ message: "Vendeur professionnel mis à jour avec succès !" });
    }
  });
};

// Contrôleur pour supprimer un vendeur professionnel par son ID
exports.supprimerVendeurPro = function (req, res) {
  VendeurPro.findByIdAndDelete(req.params.id, function (err, vendeurPro) {
    if (err) {
      res.status(500).send({ message: "Erreur lors de la suppression du vendeur professionnel : " + err });
    } else if (!vendeurPro) {
      res.status(404).send({ message: "Vendeur professionnel non trouvé" });
    } else {
      res.status(200).send({ message: "Vendeur professionnel supprimé avec succès !" });
    }
  });
};
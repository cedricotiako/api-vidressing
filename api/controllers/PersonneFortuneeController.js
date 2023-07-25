const PersonneFortunee = require('../models/PersonneFortunee');


// Contrôleur pour créer une nouvelle personne fortunée
exports.creerPersonneFortunee = function (req, res) {
    const nouvellePersonneFortunee = new PersonneFortunee({
      nom: req.body.nom,
      adresse: req.body.adresse,
      email: req.body.email,
      telephone: req.body.telephone,
    });
  
    nouvellePersonneFortunee.save(function (err) {
      if (err) {
        res.status(500).send({ message: "Erreur lors de la création de la personne fortunée : " + err });
      } else {
        res.status(201).send({ message: "Personne fortunée créée avec succès !" });
      }
    });
  };
  
  // Contrôleur pour récupérer toutes les personnes fortunées
  exports.recupererPersonnesFortunees = function (req, res) {
    PersonneFortunee.find({}, function (err, personnesFortunees) {
      if (err) {
       res.status(500).send({ message: "Erreur lors de la récupération des personnes fortunées : " + err });
      } else {
        res.status(200).send(personnesFortunees);
      }
    });
  };
  
  // Contrôleur pour récupérer une personne fortunée par son ID
  exports.recupererPersonneFortunee = function (req, res) {
    PersonneFortunee.findById(req.params.id, function (err, personneFortunee) {
      if (err) {
        res.status(500).send({ message: "Erreur lors de la récupération de la personne fortunée : " + err });
      } else if (!personneFortunee) {
        res.status(404).send({ message: "Personne fortunée non trouvée" });
      } else {
        res.status(200).send(personneFortunee);
      }
    });
  };
  
  // Contrôleur pour mettre à jour une personne fortunée par son ID
  exports.mettreAJourPersonneFortunee = function (req, res) {
    PersonneFortunee.findByIdAndUpdate(req.params.id, req.body, function (err, personneFortunee) {
      if (err) {
        res.status(500).send({ message: "Erreur lors de la mise à jour de la personne fortunée : " + err });
      } else if (!personneFortunee) {
        res.status(404).send({ message: "Personne fortunée non trouvée" });
      } else {
        res.status(200).send({ message: "Personne fortunée mise à jour avec succès !" });
      }
    });
  };
  
  // Contrôleur pour supprimer une personne fortunée par son ID
  exports.supprimerPersonneFortunee = function (req, res) {
    PersonneFortunee.findByIdAndDelete(req.params.id, function (err, personneFortunee) {
      if (err) {
        res.status(500).send({ message: "Erreur lors de la suppression de la personne fortunée : " + err });
      } else if (!personneFortunee) {
        res.status(404).send({ message: "Personne fortunée non trouvée" });
      } else {
        res.status(200).send({ message: "Personne fortunée supprimée avec succès !" });
      }
    });
  };
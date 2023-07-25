const Article = require('../models/Article');

// Contrôleur pour créer un nouvel article
exports.creerArticle = function (req, res) {
    const nouvelArticle = new Article({
      titre: req.body.titre,
      description: req.body.description,
      prix: req.body.prix,
      photo: req.body.photo,
      id_vendeur_pro: req.body.id_vendeur_pro,
      id_personne_fortunee: req.body.id_personne_fortunee,
    });
  
    nouvelArticle.save(function (err) {
      if (err) {
        res.status(500).send({ message: "Erreur lors de la création de l'article : " + err });
      } else {
        res.status(201).send({ message: "Article créé avec succès !" });
      }
    });
  };
  
  // Contrôleur pour récupérer tous les articles
  exports.recupererArticles = function (req, res) {
    Article.find({}, function (err, articles) {
      if (err) {
        res.status(500).send({ message: "Erreur lors de la récupération des articles : " + err });
      } else {
        res.status(200).send(articles);
      }
    });
  };
  
  // Contrôleur pour récupérer un article par son ID
  exports.recupererArticle = function (req, res) {
    Article.findById(req.params.id, function (err, article) {
      if (err) {
        res.status(500).send({ message: "Erreur lors de la récupération de l'article : " + err });
      } else if (!article) {
        res.status(404).send({ message: "Article non trouvé" });
      } else {
        res.status(200).send(article);
      }
    });
  };
  
  // Contrôleur pour mettre à jour un article par son ID
  exports.mettreAJourArticle = function (req, res) {
    Article.findByIdAndUpdate(req.params.id, req.body, function (err, article) {
      if (err) {
        res.status(500).send({ message: "Erreur lors de la mise à jour de l'article : " + err });
      } else if (!article) {
        res.status(404).send({ message: "Article non trouvé" });
      } else {
        res.status(200).send({ message: "Article mis à jour avec succès !" });
      }
    });
  };
  
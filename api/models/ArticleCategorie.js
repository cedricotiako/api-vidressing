const mongoose = require("mongoose");
const schema = mongoose.Schema;

// Schéma pour l'entité Article_Categorie
const ArticleCategorieSchema = new schema({
  id_article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
    required: true,
  },
  id_categorie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categorie",
    required: true,
  },
});

//Pour recuperer mon model créer plus haut
let ArticleCategorie = mongoose.model(
  "ArticleCategorie",
  ArticleCategorieSchema
);
module.exports = ArticleCategorie;

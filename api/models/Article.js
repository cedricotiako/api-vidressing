const mongoose = require("mongoose");
const schema = mongoose.Schema;

// Schéma pour l'entité Article
const ArticleSchema = new schema({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  prix: { type: Number, required: true },
  photo: { type: String, required: true },
  date_publication: { type: Date, default: Date.now },
  id_vendeur_pro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "VendeurPro",
    required: true,
  },
  id_personne_fortunee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PersonneFortunee",
    required: true,
  },
});
//Pour recuperer mon model créer plus haut
let Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;

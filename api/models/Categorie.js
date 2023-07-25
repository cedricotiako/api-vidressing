const mongoose = require("mongoose");
const schema = mongoose.Schema;

// Schéma pour l'entité Catégorie
const CategorieSchema = new schema({
  nom: { type: String, required: true },
});

//Pour recuperer mon model créer plus haut
let Categorie = mongoose.model("Categorie", CategorieSchema);
module.exports = Categorie;

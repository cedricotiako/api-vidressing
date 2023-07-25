const mongoose = require("mongoose");
const schema = mongoose.Schema;

// Schéma pour l'entité Evaluation
const EvaluationSchema = new schema({
  id_utilisateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Utilisateur",
    required: true,
  },
  id_article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
    required: true,
  },
  note: { type: Number, required: true },
  commentaire: { type: String },
});

//Pour recuperer mon model créer plus haut
let Evaluation = mongoose.model("Evaluation", EvaluationSchema);
module.exports = Evaluation;

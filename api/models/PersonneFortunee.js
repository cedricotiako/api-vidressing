const mongoose = require("mongoose");
const schema = mongoose.Schema;

const PersonneFortuneeSchema = new schema({
  nom: { type: String, required: true },
  adresse: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: String, required: true },
});

//Pour recuperer mon model créer plus haut
let PersonneFortunee = mongoose.model(
  "PersonneFortunee",
  PersonneFortuneeSchema
);
module.exports = PersonneFortunee;

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const VendeurProSchema = new schema({
  nom: { type: String, required: true },
  adresse: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: String, required: true },
  password: { type: String, required: true },
});

//Pour recuperer mon model créer plus haut
let VendeurPro = mongoose.model("VendeurPro", VendeurProSchema);
module.exports = VendeurPro;

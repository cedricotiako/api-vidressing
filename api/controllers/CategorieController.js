const Categorie = require("../models/Categorie");

// Fonction pour créer une nouvelle catégorie
exports.createCategorie = async (req, res) => {
  try {
    const { nom } = req.body;
    const newCategorie = new Categorie({
      nom,
    });
    const savedCategorie = await newCategorie.save();
    res.status(201).json(savedCategorie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour récupérer toutes les catégories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour récupérer une catégorie en particulier
exports.getCategorieById = async (req, res) => {
  try {
    const categorie = await Categorie.findById(req.params.id);
    if (!categorie) {
      return res.status(404).json({ message: "Catégorie non trouvée" });
    }
    res.status(200).json(categorie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour mettre à jour une catégorie
exports.updateCategorie = async (req, res) => {
  try {
    const updatedCategorie = await Categorie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCategorie) {
      return res.status(404).json({ message: "Catégorie non trouvée" });
    }
    res.status(200).json(updatedCategorie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour supprimer une catégorie
exports.deleteCategorie = async (req, res) => {
  try {
    const deletedCategorie = await Categorie.findByIdAndDelete(req.params.id);
    if (!deletedCategorie) {
      return res.status(404).json({ message: "Catégorie non trouvée" });
    }
    res.status(200).json(deletedCategorie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
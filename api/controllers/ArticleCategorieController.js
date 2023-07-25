const ArticleCategorie = require("../models/ArticleCategorie");

// Fonction pour créer une nouvelle association article-categorie
exports.createArticleCategorie = async (req, res) => {
  try {
    const { id_article, id_categorie } = req.body;
    const newArticleCategorie = new ArticleCategorie({
      id_article,
      id_categorie,
    });
    const savedArticleCategorie = await newArticleCategorie.save();
    res.status(201).json(savedArticleCategorie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour récupérer toutes les associations article-categorie
exports.getAllArticleCategories = async (req, res) => {
  try {
    const articleCategories = await ArticleCategorie.find();
    res.status(200).json(articleCategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour récupérer une association article-categorie en particulier
exports.getArticleCategorieById = async (req, res) => {
  try {
    const articleCategorie = await ArticleCategorie.findById(req.params.id);
    if (!articleCategorie) {
      return res.status(404).json({ message: "Association non trouvée" });
    }
    res.status(200).json(articleCategorie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour supprimer une association article-categorie
exports.deleteArticleCategorie = async (req, res) => {
  try {
    const deletedArticleCategorie = await ArticleCategorie.findByIdAndDelete(
      req.params.id
    );
    if (!deletedArticleCategorie) {
      return res.status(404).json({ message: "Association non trouvée" });
    }
    res.status(200).json(deletedArticleCategorie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
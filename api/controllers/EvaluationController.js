const Evaluation = require("../models/Evaluation");

// Fonction pour créer une nouvelle évaluation
exports.createEvaluation = async (req, res) => {
  try {
    const { id_utilisateur, id_article, note, commentaire } = req.body;
    const newEvaluation = new Evaluation({
      id_utilisateur,
      id_article,
      note,
      commentaire,
    });
    const savedEvaluation = await newEvaluation.save();
    res.status(201).json(savedEvaluation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour récupérer toutes les évaluations
exports.getAllEvaluations = async (req, res) => {
  try {
    const evaluations = await Evaluation.find();
    res.status(200).json(evaluations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour récupérer une évaluation en particulier
exports.getEvaluationById = async (req, res) => {
  try {
    const evaluation = await Evaluation.findById(req.params.id);
    if (!evaluation) {
      return res.status(404).json({ message: "Évaluation non trouvée" });
    }
    res.status(200).json(evaluation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour mettre à jour une évaluation
exports.updateEvaluation = async (req, res) => {
  try {
    const updatedEvaluation = await Evaluation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEvaluation) {
      return res.status(404).json({ message: "Évaluation non trouvée" });
    }
    res.status(200).json(updatedEvaluation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour supprimer une évaluation
exports.deleteEvaluation = async (req, res) => {
  try {
    const deletedEvaluation = await Evaluation.findByIdAndDelete(req.params.id);
    if (!deletedEvaluation) {
      return res.status(404).json({ message: "Évaluation non trouvée" });
    }
    res.status(200).json(deletedEvaluation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
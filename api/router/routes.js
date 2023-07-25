const router = require("express").Router();

const vendeurProController = require('../controllers/VendeurProController');
const personneFortuneeController = require('../controllers/PersonneFortuneeController');
const articleController = require('../controllers/ArticleController');
const evaluationController = require('../controllers/EvaluationController');
const ArticleCategorieController = require("../controllers/ArticleCategorieController");
const CategorieController = require("../controllers/CategorieController");

// Routes pour ArticleCategorieController
router.post("/article-categorie", ArticleCategorieController.createArticleCategorie);
router.get("/article-categories", ArticleCategorieController.getAllArticleCategories);
router.get("/article-categorie/:id", ArticleCategorieController.getArticleCategorieById);
router.delete("/article-categorie/:id", ArticleCategorieController.deleteArticleCategorie);

// Routes pour CategorieController
router.post("/categorie", CategorieController.createCategorie);
router.get("/categories", CategorieController.getAllCategories);
router.get("/categorie/:id", CategorieController.getCategorieById);
router.put("/categorie/:id", CategorieController.updateCategorie);
router.delete("/categorie/:id", CategorieController.deleteCategorie);

// Routes pour les vendeurs professionnels
router.post('/vendeurs-pro', vendeurProController.creerVendeurPro);
router.get('/vendeurs-pro', vendeurProController.recupererVendeursPro);
router.get('/vendeurs-pro/:id', vendeurProController.recupererVendeurPro);
router.put('/vendeurs-pro/:id', vendeurProController.mettreAJourVendeurPro);
router.delete('/vendeurs-pro/:id', vendeurProController.supprimerVendeurPro);

// Routes pour les personnes fortunées
router.post('/personnes-fortunees', personneFortuneeController.creerPersonneFortunee);
router.get('/personnes-fortunees', personneFortuneeController.recupererPersonnesFortunees);
router.get('/personnes-fortunees/:id', personneFortuneeController.recupererPersonneFortunee);
router.put('/personnes-fortunees/:id', personneFortuneeController.mettreAJourPersonneFortunee);
router.delete('/personnes-fortunees/:id', personneFortuneeController.supprimerPersonneFortunee);

// Routes pour les articles
router.post('/articles', articleController.creerArticle);
router.get('/articles', articleController.recupererArticles);
router.get('/articles/:id', articleController.recupererArticle);
router.put('/articles/:id', articleController.mettreAJourArticle);
//router.delete('/articles/:id', articleController.);

// Routes pour les évaluations
router.post('/evaluations', evaluationController.createEvaluation);
router.get('/evaluations', evaluationController.getAllEvaluations);
router.get('/evaluations/:id', evaluationController.getEvaluationById);
router.put('/evaluations/:id', evaluationController.updateEvaluation);
router.delete('/evaluations/:id', evaluationController.deleteEvaluation);

module.exports = router;

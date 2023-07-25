const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
dotenv.config()

// Configuration de Mongoose pour se connecter à la base de données MongoDB
mongoose.connect(process.env.MONGODB_CONNECT2, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Configuration de body-parser pour traiter les requêtes POST avec des données JSON
app.use(bodyParser.json());

// Configuration de CORS pour permettre les requêtes cross-domain
app.use(cors());

// Configuration du port du serveur 
const port = process.env.PORT || 8080 ;
// Envoyer un message pour l'URL par défaut 
app.get('/', (req, res) => res.send('Bienvenue dans l\'api node.js de Vidressing'));

// Importation des routes
const routes = require('./api/router/routes');

// Configuration des routes
app.use('/api', routes);

// Démarrage du serveur
app.listen(port, () => {
  console.log('Le serveur est démarré sur le port '+ port);
});

const express = require('express');
const app = express();
const config = require('config');

// configuration pour le traitement du corps de la requête
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// charger les valeurs de configuration
const port = config.get('server.port');
const dbUrl = config.get('database.url');

// démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});


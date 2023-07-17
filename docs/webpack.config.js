const path = require('path');

module.exports = {
    entry: './src/index.js', // chemin relatif vers le point d'entrée de l'application
    output: {
        path: path.resolve(__dirname, 'dist'), // chemin absolu vers le dossier de sortie
        filename: 'bundle.js', // nom du fichier de sortie
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // regex pour les fichiers JS et JSX
                exclude: /node_modules/, // exclusion du dossier node_modules
                use: {
                    loader: 'babel-loader', // utilisation du loader babel
                },
            },
        ],
    },
};

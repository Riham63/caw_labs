const notation = require('./notation');

// Fonction pour calculer les moyennes de tableaux
function getAverages(notesArrays) {
    return notesArrays.map(arr => notation.mean(arr));
}

// Exporter pour Jest
module.exports = { getAverages };

